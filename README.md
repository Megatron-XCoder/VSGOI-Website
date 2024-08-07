# VSGOI Learning Management System (LMS) and Website

Welcome to the VSGOI LMS and Website project. This application is a comprehensive and fully functional Learning Management System designed and developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The LMS aims to facilitate educational activities, providing a seamless interface for students and educators to manage learning resources, courses, and communications.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

VSGOI LMS and Website is a robust platform designed to cater to the needs of students and educators by offering features such as course management, resource sharing, user authentication, and more. The system is built to provide a smooth and efficient user experience, leveraging the power of modern web technologies.

## Features

- **User Authentication**: Secure login and registration for students and educators.
- **Course Management**: Create, update, and manage courses and their contents.
- **Resource Sharing**: Upload and access educational resources such as documents and videos.
- **Assignments and Quizzes**: Tools for creating and managing assignments and quizzes.
- **Communication**: Built-in messaging and announcement features.
- **Responsive Design**: Fully responsive design for optimal viewing on any device.
- **Dashboard**: User-friendly dashboard for accessing courses and notifications.

## Technologies Used

- **Frontend**:
    - React.js: For building the user interface.
    - Tailwind CSS: For utility-first responsive design.
    - Material UI: For pre-built components and theming.
    - Daisy UI: For extending Tailwind CSS with ready-to-use components.

- **Backend**:
    - Node.js: For building the server-side logic.
    - Express.js: For handling server routes and API endpoints.

- **Database**:
    - MongoDB: As the database to store user data, courses, and other resources.

- **Validation**:
    - Zod: For schema validation and error handling.

- **Authentication**:
    - JSON Web Tokens (JWT): For secure user authentication and authorization.

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Megatron-XCoder/VSGOI-Website.git
   ```
   
2. **Install Backend Dependencies**
   ```bash
   cd vsgoi-lms/backend-code
   npm install
   ```
   
3. **Install Frontend Dependencies**
   ```bash
   cd ../vsgoi-website
   npm install
   ```

4. **Configure Environment Variables :**
    - Create a .env file in the backend directory and add your MongoDB URI, JWT secret, and other environment 
   variables
   ```bash
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

5. **Start the Application**
    - Open two terminal windows. In one terminal, start the backend server :
   ```bash
   cd ../vsgoi-website
   node ./index.js
    ```
   
   - Open two terminal windows. In one terminal, start the backend server :
   ```bash
   cd ../backend-code
   npm run dev
   ```
