import { createRequire } from "module";
import Subscription from "../models/subscription.models.js";
import dayjs from "dayjs";
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");

const REMINDERS = [7, 5, 2, 1];

export const sendRemiders = serve(async (context) => {
  const { subscriptionId } = context.requestPayload;
  const subscription = await fetchSubscription(context, subscriptionId);
  if (!subscription || subscription.status !== "active") return;

  const renewalDate = dayjs(subscription.renewalDate);
  if (renewalDate.isBefore(dayjs())) {
    console.log(`Renewal data has passed ${subscriptionId}`);
    return;
  }
  for (const daysBefore of REMINDERS) {
    const reminderDate = renewalDate.subtract(daysBefore, "day");
    if (reminderDate.isAfter(dayjs())) {
      await sleepUntilReminder(
        context,
        `Remider ${daysBefore} days before`,
        reminderDate
      );
    }
    await triggerRemider(context, `Remider ${daysBefore} days before`);
  }
});
const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get subscription", () => {
    return Subscription.findById(subscriptionId).populate("user", "name email");
  });
};

const sleepUntilReminder = async (context, label, date) => {
  console.log(`Sleeping until ${label} reminder at ${date}`);
  await context.sleepUntit(label, date.toDate());
};
const triggerRemider = async (context, label) => {
  return await context.run(label, () => {
    console.log(`Triggering ${label} Remider`);
  });
};
