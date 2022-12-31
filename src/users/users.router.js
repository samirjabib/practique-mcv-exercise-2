
const { getUsersInDb, createUserInDb, getUserWithId } = require('./users.services')

const usersRouter = require('express').Router();


usersRouter.get('/users', getUsersInDb );

usersRouter.post('/users', createUserInDb);

usersRouter.get('/users/:id', getUserWithId );


module.exports = {
    usersRouter
};