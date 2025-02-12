#  Subscription Tracker API

 backend API built using Node.js and Express to help users manage and track their subscriptions efficiently.

## Features
- User authentication with JWT
- Subscription management (add, update, delete subscriptions)
- Secure password hashing with bcryptjs
- Database integration using MongoDB & Mongoose
- Environment variable support via dotenv
- Logging with Morgan

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT Authentication**
- **Day.js for Date Management**
- **BcryptJS for Password Hashing**
- **Upstash Workflow**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/YogirajDAhirrao/subscriptionTracker_api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd subscriptionTracker_api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add the required environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

## Usage

### Development Mode
```sh
npm run dev
```

### Production Mode
```sh
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a JWT token

### Subscription Management
- `GET /api/subscriptions` - Get all subscriptions
- `POST /api/subscriptions` - Add a new subscription
- `PUT /api/subscriptions/:id` - Update subscription
- `DELETE /api/subscriptions/:id` - Delete subscription

## Contributing
Feel free to submit issues and pull requests to improve the project.

## License
This project is licensed under the MIT License.

---

Happy coding! 🚀

# subscriptionTracker_api
