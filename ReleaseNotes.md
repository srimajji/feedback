# Release notes

## 0.2-alpha

### Client

1. Fixed login flow where user would be automatically logged out if json web token is expired
2. Wired submissions page with `/feedbacks/` api
3. Created a seperate page for new feedbacks

## 0.1-alpha

### Client

1. Basic foundation of the react app
2. Created intial log in flow using json web tokens
3. Created initial Home, Submissions, Company pages
4. Wired Company page with `/companies/` api


### Server

1. Created basic models for feedback, response, user and Company objects
2. Created initial GET,POST,PUT and DELETE rest api for each of the models
3. Added ability to create json web tokens for log in flow
