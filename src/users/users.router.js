const { Router } = require('express');

const { getUsersInDb } = require('./users.services')

const usersRouter = require('express').Router();


usersRouter.get('/users', );

usersRouter.post('/users');

usersRouter.get('/users/:id');


module.exports = {
    usersRouter
};