📊 PrismSQL
PrismSQL is a simple Node.js project designed to demonstrate how to connect a Node.js application to a MySQL database using Prisma ORM. It serves as a foundational example for beginners to understand the integration of Prisma with MySQL.

🚀 Features
Prisma ORM Integration: Utilizes Prisma for database schema management and querying.

MySQL Database Connection: Connects to a MySQL database to perform basic operations.

Modular Code Structure: Organized codebase for clarity and ease of understanding.

🛠️ Getting Started
Prerequisites
Node.js (v14 or above)

MySQL installed and running

npm (Node Package Manager)

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Jiya-code21/prismsql.git
cd prismsql
Install dependencies:

bash
Copy code
npm install
Set up the .env file:

Create a .env file in the root directory and add your database connection string:

env
Copy code
DATABASE_URL="mysql://<username>:<password>@localhost:3306/<database_name>"
Replace <username>, <password>, and <database_name> with your MySQL credentials.

Initialize Prisma:

bash
Copy code
npx prisma init
This will create a prisma folder with a schema.prisma file.

Define your data model:

Edit the prisma/schema.prisma file to define your database schema.

Run migrations:

bash
Copy code
npx prisma migrate dev --name init
This will create the necessary tables in your database.

Generate Prisma Client:

bash
Copy code
npx prisma generate
Start the application:

bash
Copy code
node index.js
