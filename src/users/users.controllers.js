const uuid = require('uuid')


//Estrucutre DB 
// {
// 	id: 'uuid',
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

const usersDB = [
   
];


const getAllUsers = () => {
    return usersDB
};

const createUser = (data) => {
    console.log(data);

    const newUser = {
        ...data,
        iid:uuid.v4()
    }

    usersDB.push(newUser);

    return newUser;
}



module.exports = {
    getAllUsers,
    createUser
}