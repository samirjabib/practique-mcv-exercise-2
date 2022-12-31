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
    {
        "first_name": "samir elias",
        "last_name": "jabib caro",
        "email": "string",
        "password": "0265dante",
        "birthday": "1996/06/02",
        "id": "90dcb5cd-8857-4a0a-a85d-07cc6956cf56"
    }
];

const getAllUsers = () => {
    return usersDB
};

const createUser = (data) => {
    console.log(data);

    const newUser = {
        ...data,
        id:uuid.v4()
    }

    usersDB.push(newUser);
    console.log(usersDB, 'this is the the console.log in user db')

    return newUser;
}

const getUserById = (id) => {
    const data = usersDB.find( user => user.id === id);
    console.log(usersDB)
    return data
}



module.exports = {
    getAllUsers,
    createUser,
    getUserById
}