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
26. API - update a user
27. schema type validations
28. add required, unique, lowercase, min, minLength, trim
29. Add default
30. Create custom validate function for gender
31. Improve the DB Schema - Put all appropriate validations on each field in Schema.
32. Add timestamps to the schema
33. Add API level validation on Patch request and Sign up post API
34. Data Sanitizing: Add API validation for each field.
35. Install validator (npm i validator) - external library for validations
36. Add validations to password, email and photoURL (validator is installed for this)
37. NEVER TRUST req.body
38. Validate data in sign up api
39. Install bcrypt package
40. Create passwordHash using bcrypt.hash and save the user with encrypted password.
41. Create login api
42. Compare passwords and throw errors if email or password is invalid.
43. Install cookie-parser
44. Just send dummy cookie to the user
45. Create GET /profile API and check you get the cookie back
46. Install jsonwebtoken
47. In login API, after email and password validation, create a JWT token and send it to user
48. Read the cookies inside your profile API and find the logged in user
