# Dev-Tinder

Requirement Analysis

1. Create an account
2. Login
3. Create your profile
4. Feed page - explore other devs
5. Send/Reject connection requtest
6. See out matches
7. See the request we've sent/recieve
8. Update your profile

LLD

# DB Design

- User Collection
  - fname
  - lname
  - phone
  - ....
- Connection Requests
  - from user id
  - to user id
  - status

APIs

- POST /signup
- POST /login
- GET /profile
- POST /profile
- PATCH /profile
- DELETE /profile
- POST /sendRequest
- POST /reviewRequest
- GET /request
- GET /connection

The Steps:

1. Create a repository
2. Initialize the repository
3. node modules, package.json, package-lock.json
4. Install Express
5. Create a server
6. Listen to port 3000
7. Write request handlers for /test, /hello
8. Install nodemon and update scripts inside package.json
9. Create config folder and database.js file inside it in src folder
10. Create a free cluster on MongoDB official website (Mongo Atlas)
11. Install mongoose library
12. Connect the application to the data base. "Connection-url/database-name"
13. Call the connectDB function and connect to database before starting application on port (always listen the port after establishing the connection to the database)
14. Create user schema
15. Create user model
16. Create signup post api
17. Creating a new instance of user model
18. Create a POST /signup api to add data to database
19. Push documents using API calls from postman
20. Error handling using try catch
21. Add the express.json middleware to the app
22. Make the sign up api dynamic to receive data from the end user.
23. API - Get user by email
24. API - Feed API - GET /feed - get all the users from the database
25. Create delete /user API
