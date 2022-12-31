const express = require("express");

const { usersRouter } = require('./users/users.router');

const app = express();

app.use(express.json());

app.use("/api/v1", usersRouter) //Main route

app.listen(4000, () => {
    console.log("server stared at port 4000"); 
});

