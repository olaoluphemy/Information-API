#### DESCRIPTION: 
This project showcases a simple web API, which returns basic information about me on making a GET request to the "/api/v1/user" endpoint.
The entire project is built with Node.js(express).

#### SETUP INSTRUCTION:
to setup the project run the command "npm i" to install all application dependencies(express, morgan, cors, dotenv),
run "npm i nodemon --save-dev" if you don't already have nodemon installed globally on your desktop, this is because the script "npm start"
wouldn't run if nodemon isn't installed(as a dev dependency or global install). To install nodemon globally run the script "npm i nodemon --global",
there's also a need for a "config.env" file. The file should contain the variable "NODE_ENV" with a value equal to "development" i.e NODE_ENV=development.
There's an optional environment variable "PORT", which you'll set to the preferred port number you want the app to run. Defaults to 3000, if unset.
the program can be run locally using the npm script "npm start"

#### API DOCS:
base URL - (https://information-api-three.vercel.app/api/v1)

endpoint - /user

method: GET

response:
statusCode - 200(OK)

`{
    "email": "bidesim8@gmail.com",
    "current_datetime": "2025-02-03T12:11:40.371Z",
    "github_url": "https://github.com/olaoluphemy/Information-API"
}`

method: POST, PATCH, PUT, DELETE 

response:
statusCode - 405(Method Not Allowed)

`{
    "status": "fail",
    "message": "Request type is not allowed!"
}`
