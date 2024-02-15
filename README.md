# simple-github-parser

A simple app that allows users to log in through their GitHub account.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

This project is a simple web application built with Node.js and Express. It provides a user authentication system through GitHub accounts using Passport.js. The application uses the GitHub API to fetch and display user data.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/simple-github-parser.git
   
2. **Navigate to the project directory:**

    ```bash
    cd simple-github-parser
3. **Install dependencies:**

    ```bash
    npm install
    
4. **Create a .env file in the project root and add the following:**

    ```bash
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    SESSION_SECRET=your_session_secret
    
Replace your_github_client_id, your_github_client_secret, and your_session_secret with your GitHub OAuth application credentials and a random session secret.

5. **Run the application:**

    ```bash
    node index.js
    
The application will be accessible at http://localhost:3000.

Usage
Visit the application in your web browser and log in with your GitHub account to explore the features.

Primary Logic
The main logic of going through directories and parsing pom.xml files is included in the /public/fetchDep.js file. It involves recursively going through directories, 
kind of like a Depth-First-Search.

**Dependencies:**

      ```bash
      axios: ^1.6.7
      crypto: ^1.0.1
      dotenv: ^16.4.4
      express: ^4.18.2
      express-session: ^1.18.0
      passport: ^0.7.0
      passport-github: ^1.1.0
      xml2js: ^0.6.2

Contributing
If you would like to contribute to the project, please follow the contribution guidelines.

Contact
For any inquiries, reach out to the author:

Author: Ankan
