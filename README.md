AdvTech API

This is a TypeScript-based API designed to handle data processing and endpoints for the AdvTech software.

Getting Started

Prerequisites

Make sure you have the following installed:

Node.js

Yarn

PostgreSQL

Installation

Clone this repository:

git clone https://github.com/your-repo/advtech-api.git
cd advtech-api

Install dependencies using Yarn:

yarn install

Configure environment variables:

Create a .env file in the root directory

Add the required database configuration (PostgreSQL)

DATABASE_URL=postgresql://user:password@localhost:5432/advtech_db

Running the API

To start the API in development mode:

yarn dev

Frontend Integration

The AdvTech API is designed to work seamlessly with the frontend available in the advtech directory. Ensure that both projects are properly configured to communicate with each other.

Project Structure

This project follows a component-based architecture, organizing features into separate modules to ensure maintainability and scalability.

Technologies Used

TypeScript

Node.js

Express.js

PostgreSQL

Yarn (for package management)

Contributing

Feel free to contribute by forking the repository and creating pull requests.

License

This project is licensed under the MIT License.
