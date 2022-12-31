const { getAllUsers, createUser } = require('./users.controllers');


const getUsersInDb = (req, res) => {
    const data = getAllUsers();

    res.status(200).json(data);
}


const createUserInDb = (req, res) => {
    const data = createUser(req.body)

    if(data){
        const newUser = createUser(data);
        res.status(201).json(newUser);
    } else {
        res.status(400).json({message:'missing data'});
    };
}





module.exports = {
    getUsersInDb,
    createUserInDb
};