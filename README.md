
# Pro-Lance CRM

## Description

Pro-Lance CRM is a comprehensive platform designed to manage projects, tasks, and professional engagements seamlessly. It provides features to connect professionals (freelancers) with clients, track project progress, handle invoicing, and facilitate communication through comments and work notes.

## Features

- User Authentication: Secure login and registration for clients, freelancers, and admins.
- Project Management: Create, view, update, and delete projects.
- Comments and Worknotes: Add comments and work notes to projects and tasks.
- Invoicing: Generate and manage invoices for projects and tasks.
- Profile Management: Create and manage freelancer profiles, including skills, experience, and trade offerings.
- Role-based Access: Different functionalities for clients, freelancers, and admins.


## Prerequisites

- Node.js
- npm
- PostgreSQL

## Setup Instructions

### Backend Setup

1. Clone the repository:
   
   git clone <https://github.com/M4RKL4B0Y/MP3_Project_PRO-LANCE.git>
   cd MP3_Project_PRO-LANCE/backend
   

2. Install the dependencies:
   
   npm install
   

3. Create a `.env` file in the backend directory and configure your environment variables:
   
   SECRET_KEY=your_secret_key
   NODE_ENV=development
   PORT=3000
   

4. Set up your PostgreSQL database and update `config/config.json` with your database credentials.

5. Run database migrations:
   
   npx sequelize-cli db:migrate
   

6. Start the backend server:
   
   npm run backend:start
   

### Frontend Setup

1. Navigate to the frontend directory:
   
   cd ../frontend
   

2. Install the dependencies:
   
   npm install
   

3. Build the frontend:
   
   npm run build
   

4. Start the frontend server:
   
   npm run frontend:start
   

### Combined Setup

1. In the root directory, run the following command to start both backend and frontend servers:
   
   npm run dev

## Left to Do's

Migrations

Deployment
   

## Testing

### API Testing with Postman

1. Ensure your backend server is running.
2. Open Postman and create a new request.
3. Set the request method to POST and the URL to `http://localhost:3000/api/auth/register`.
4. In the body tab, select raw and JSON format, then provide the user registration details:
   json

In the body tab, select raw and JSON format, then provide the user registration details:

```json
{
  "name": "Willard Smith",
  "username": "waynewonder"
}

   
5. Send the request and verify the response.

### Frontend Testing

1. Open your web browser and navigate to `http://localhost:5173`.
2. Test the following URLs:
   - `/register`: To register a new user.
   - `/login`: To log in with an existing user.
   - `/dashboard`: To access the daboard after logging in.
   - `/projects`: To view the list of projects.
   - `/tasks`: To view the list of tasks.
   - `/comments`: To view and add comments.
   - `/newRequest`: To create a new project or task request.

## BaseURL Configuration

To set up the base URL for API requests, refer to the following issue on GitHub: 
[How to Get the BaseURL from axios.create({baseURL})? #2985](https://github.com/axios/axios/issues/2985) by KaizenTamai.

## Technologies Used

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL
- React
- Vite
- React Bootstrap
- Axios


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
