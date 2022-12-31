const { Router } = require('express');

const usersRouter = require('express').Router();


usersRouter.get('/users');

usersRouter.post('/users');

usersRouter.get('/users/:id');


module.exports = usersRouter;