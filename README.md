Manga Mania
Manga Mania is a full-stack application for tracking manga that you have read. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it allows users to authenticate using JWT with HttpOnly cookies, add details about the manga they have read, and track their progress.

Features
User Authentication: Secure login and registration using JWT with HttpOnly cookies.
Manga Tracking: Add details about the manga you have read, including the reading link and the chapter up to which you have read.
REST API: API endpoints to manage manga details.
Responsive Design: Accessible on both desktop and mobile devices.
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/manga-mania.git
cd manga-mania
Install server dependencies:

sh
Copy code
cd server
npm install
Install client dependencies:

sh
Copy code
cd ../client
npm install
Create a .env file in the server directory and add your environment variables:

env
Copy code
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Start the development servers:

sh
Copy code
# In the server directory
npm run dev

# In the client directory
npm start
Usage
Register a new account or login with an existing account.
Add manga details including the title, reading link, and the last chapter you have read.
View and manage your manga list.
API Endpoints
User Authentication:

POST /api/auth/register - Register a new user.
POST /api/auth/login - Login an existing user.
POST /api/auth/logout - Logout the current user.
Manga Management:

GET /api/manga - Get a list of all manga entries for the authenticated user.
POST /api/manga - Add a new manga entry.
PUT /api/manga/:id - Update an existing manga entry.
DELETE /api/manga/:id - Delete a manga entry.
Technologies Used
Frontend:

React
Redux Toolkit
Axios
Backend:

Node.js
Express.js
MongoDB
Mongoose
Authentication:

JWT (Json Web Token)
HttpOnly Cookies
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, please contact your-email@example.com.
