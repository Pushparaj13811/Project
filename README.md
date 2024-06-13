# Story Sharing Platform

Welcome to the Story Sharing Platform! This project is a web application that allows users to share and read stories. The frontend is built using React, ShadCN, Tailwind CSS, and React Hook Form, while the backend is developed with plain PHP. The application uses MySQL as the database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login, registration)
- Create, edit, and delete stories
- View stories shared by others
- Responsive design
- Form validation using React Hook Form

## Technologies Used

### Frontend

- React
- ShadCN
- Tailwind CSS
- React Hook Form
- npm (Node Package Manager)

### Backend

- PHP
- Composer (PHP Package Manager)
- MySQL (Database)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- PHP
- Composer
- MySQL

## Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Pushparaj13811/Project
   cd Project/frontend
   ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

The frontend should be now runnign on ` http://localhost:3000 `.

## Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd ../backend
    ```

2. Install dependency using composer : 

    ```bash
    composer install
    ```
3. Configure your environment variables by copying `.env.sample` to `.env` and updating the values:
    ```bash
    cp .env.example .env
    ```
4. Start the php development server : 

    ```bash
    php -S localhost:8000
    ```
The backend should now be running one ` http://localhost:8000 `.

## Database setup

1. Create a new Mysql database : 

    ```bash
    CREATE DATABASE project-php;
    ```

2. Import the database schema :

    ```bash
    mysql -u your_username -p project-php < Project/backend/schema.sql
   ```

3. Update the database connection settings in the `.env` file located in the backend directory:

    ```bash
    DB_HOST=localhost
    DB_NAME=story_sharing_platform
    DB_USER=your_username
    DB_PASS=your_password
    ```
## Usage

1. Open your browser and navigate to [Share your stories](http://localhost:3000 ) to access the application.
2. Register a new account or log in with an existing account.
3. Start sharing your stories and explore stories shared by others.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Create a pull request describing your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

---

Thank you for using the Story Sharing Platform! If you have any questions or feedback, please feel free to open an issue on the repository.
