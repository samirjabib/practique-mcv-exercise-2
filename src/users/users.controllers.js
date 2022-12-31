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
        id:uuid,
        first_name:'samir',
        last_name:'elias',
        email:'samir.jc123@gmail.com',
        password:'4231Samir',
    }
];


const getAllUsers = () => {
    return usersDB
};



module.exports = {
    getAllUsers
}