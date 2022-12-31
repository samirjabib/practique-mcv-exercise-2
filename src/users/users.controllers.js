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
        
    }
];


const getAllUsers = () => {
    return usersDB
};



module.exports = {
    getAllUsers
}