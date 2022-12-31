const { Router } = require('express');

const { getAllUsers } = require('./users.services')

const usersRouter = require('express').Router();


usersRouter.get('/users', getAllUsers);

usersRouter.post('/users');

usersRouter.get('/users/:id');


module.exports = {
    usersRouter
};