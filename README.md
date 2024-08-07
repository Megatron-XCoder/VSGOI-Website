# VSGOI Learning Management System (LMS) and Website

Welcome to the VSGOI LMS and Website project. This application is a comprehensive and fully functional Learning 
Management System designed and developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The LMS aims 
to facilitate educational activities, providing a seamless interface for students and educators to manage learning 
resources, courses, and communications.

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

VSGOI LMS and Website is a robust platform designed to cater to the needs of students and educators by offering 
features such as course management, resource sharing, user authentication, and more. The system is built to provide 
a smooth and efficient user experience, leveraging the power of modern web technologies.

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

4. **Start the Application**
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

5. **Build Tailwind CSS:**
    - If the project requires building the CSS files, run the build command specified in the project's documentation or package.json scripts. This usually involves a command like:

   ```bash
   npm run build
   ```
   
## Usage

Once the servers are running, open your web browser and navigate to http://localhost:3000 to access the application. You can register as a new user or log in if you already have an account.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch (git checkout -b feature/NewFeature)
- Commit your Changes (git commit -m 'Add some New Feature')
- Push to the Branch (git push origin feature/NewFeature)
- Open a Pull Request


## License
- This project is licensed under the MIT License. See the LICENSE file for more information.

## Contact
For any inquiries or feedback, feel free to reach out:
- Sanjeev Kumar Das(Author) - crisiscrush525@gmail.com
- Project Link: https://github.com/your-username/vsgoi-lms
