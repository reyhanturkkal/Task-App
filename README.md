# Task Manager App

This is a simple full-stack Task Management application built using **Next.js**, **React**, **Prisma**, **MongoDB**, and **Tailwind CSS**. The app allows users to **sign up**, **log in**, and manage their tasks efficiently. Each user can create, view, update, and delete tasks.

## Features

- **User Authentication**: Register and sign in with Clerk.
- **Task Management**: Users can create, edit, and delete tasks.
- **API Interaction**: Axios is used for handling HTTP requests.
- **React Hot Toast**: For notifications and feedback.
- **Moment.js**: Used for date and time handling.
- **Styled Components**: For managing component styles.

## Technologies Used

- **Next.js**: React framework for building both frontend and backend.
- **Prisma**: ORM for database management (supports PostgreSQL, MySQL, etc.).
- **Clerk**: User authentication and session management.
- **Axios**: To handle HTTP requests.
- **Tailwind CSS**: Provides responsive design and utility-first CSS framework.
- **Styled Components**: For managing CSS directly in React components.

## Requirements

- **Node.js** (v14 or higher)
- A database supported by **Prisma** (PostgreSQL or MySQL is recommended)
- A **Clerk** account for user authentication services

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-user/taskapp.git
   cd taskapp
   ```
2. **Install dependencies**:
   ```
    npm install
    //
    yarn install
   ```
3. **Set up environment variables**:

   - Create a .env file and add the following variables:

   ```
   DATABASE_URL="mongodb+srv://[username]:[password]@[cluster-url]/[database-name]?retryWrites=true&w=majority"
   ```

   - Create a .env.local file and add the following variables:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin

   ```
4. **Set up Prisma**:
    - Configure your database in ``prisma/schema.prisma``.
    - Run the Prisma migration:

   ```
    npx prisma migrate dev  
   ```
## Learn More

To learn more about building a full-stack task management app or using Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [FreeCodeCamp Full Stack Task Manager Video](https://www.youtube.com/watch?v=OHvfgaDl-yY) - YouTube tutorial on how to build a task manager app.
- [FreeCodeCamp YouTube Channel](https://www.youtube.com/@freecodecamp) - A great resource for learning full-stack web development.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
