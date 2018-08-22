# challenge-anestech

1 ) You need to install all dependeces. First open your console inside project and after enter the command below.
`npm install`

2 ) You need to install mongodb to run the project. Go to the website below and install.
`https://docs.mongodb.com/manual/installation/`

3 ) Run the command below
`npm start`


## example document to send by post:

### POST
`http://localhost:4000/v1/tasks`

```
{
  "delivery_time": "08:00 hrs",
  "task": "Finish all application"
} 
```
## Another URL's 
#### GET ALL
`http://localhost:4000/v1/tasks`

#### GET BY ID
 - Remember you need to send a valid id hash, but if you send a not valid id hash, the API will send a error with error detail.
`http://localhost:4000/v1/tasks/_some_id_hash`

### PUT
 - The orientation it's same as above. 
`http://localhost:4000/v1/tasks/_some_id_hash`

### DELETE
 - The orientation it's same as above. 
`http://localhost:4000/v1/tasks/_some_id_hash`

