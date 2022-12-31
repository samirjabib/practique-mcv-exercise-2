const { getAllUsers } = require('./users.controllers');


const getUsersInDb = (req, res) => {
    const data = getAllUsers();

    res.status(200).json(data);
}



module.exports = {
    getUsersInDb
};