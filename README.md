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
