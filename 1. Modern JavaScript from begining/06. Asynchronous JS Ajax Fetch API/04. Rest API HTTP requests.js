/*
* API
1. Application Program Interface
2. Contract provided by one piece of software to another
3. Structured request and response

* REST 
1. Representational State Transfer
2. Architecture style for designing networked applications
3. Relies on stateless, client-server protocols, almost always HTTP
4. Treats server objects as resources that can be created or destroyed 
5. Can be used virtually any programming
6. All APIs have their own rules and structure

API is an messenger and REST lets us HTTP requests to format that message. REST API takes multiple types of HTTP requests.

* HTTP Requests
1. GET: Retrieve dat from a specific resource
2. POST: Submit data to be processed to a specified resource
3. PUT: Update a specific resource
4. DELETE: Delete a specific resource

HEAD   : Same as get ut does not returns body
OPTIONS: Returns the supported HTTP methods
PATCH  : Update partial resources

* API Endpoints
GET    https: someUrl.com/api/users    //Get all users
GET    https: someUrl.com/api/users/1  //Get single user
POST   https: someUrl.com/api/users    //Add user
PUT    https: someUrl.com/api/users/1  //Update user
DELETE https: someUrl.com/api/users/1  //Delete user

With POST, PUT and DELETE method we send the data along with the request


*/
