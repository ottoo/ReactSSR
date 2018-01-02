# React SSR

Server side rendered react application base for hobby and possible work projects. WIP.

 * react-router 4 for routing
 * react-router-config library is used to share the routes
between the frontend and the backend.
 * redux

Backend is a simple Express server that routes all the requests to
the frontend, creates routes, redux-store and others.

You can test the simple app by first running `npm install` and then `npm run dev` and going to `http://localhost:3000`
in your browser. The npm script will run the server and frontend builds together.

Learning based on the awesome [Stephen Griders Udemy course](https://www.udemy.com/server-side-rendering-with-react-and-redux).