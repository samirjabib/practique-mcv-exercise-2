const { getAllUsers, createUser, getUserById } = require('./users.controllers');


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

const getUserWithId = ( req, res ) => {
    const id = req.params.id;

    if(id){
        const user = getUserById(id)
        console.log(user)

        res.status(200).json(user)
    } else {
        res.status(400).json({message:'missing data'});
    }
}


module.exports = {
    getUsersInDb,
    createUserInDb,
    getUserWithId,
};