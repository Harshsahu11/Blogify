🚀 Blogify

A full-stack blogging platform built using Node.js, Express, MongoDB, and EJS.
Users can create blogs, upload cover images, and add comments with authentication support.

📌 Features

📝 Create and publish blogs
🖼 Upload blog cover images (Multer)
👤 User authentication (Login/Register)
💬 Add comments on blogs
🧑 Display author details
📱 Responsive UI using Bootstrap
🔐 Secure password hashing (bcrypt)

🛠 Tech Stack
Node.js	- Backend runtime
Express.js -	Web framework
MongoDB	- Database
Mongoose - ODM
EJS	- Templating engine
Bootstrap	UI - styling
Multer	- File uploads
bcrypt	- Password hashing


⚙️ Installation
1️⃣ Clone Repository
git clone https://github.com/your-username/blogify.git
cd blogify
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables

Create a .env file:

PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Start Server
npm start

Server will run at:

http://localhost:8000

🔐 Authentication Flow

User registers

Password hashed using bcrypt

Session/JWT used for login

Only logged-in users can comment or create blog

🧠 Key Concepts Implemented

MVC Architecture
RESTful Routing
Middleware Usage
Route Protection
Image Upload Handling
MongoDB Relationships (populate)
