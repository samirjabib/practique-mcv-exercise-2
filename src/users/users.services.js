const { getAllUsers, createUser } = require('./users.controllers');


const getUsersInDb = (req, res) => {
    const data = getAllUsers();

    res.status(200).json(data);
}


const createUserInDb = (req, res) => {

    const data = createUser(req.body)

    res.status(201).json(data)

}



module.exports = {
    getUsersInDb,
    createUserInDb
};