const {v4} = require('uuid');

const contacts = [
    {
        id:v4(),
        name:"Caio",
        phone:"1231312312",
        category_id:v4()
    },
    {
        id:v4(),
        name:"Fulano",
        phone:"1231312312",
        category_id:v4()
    }
];


class ContactRepository{
     findAll(){
        return new Promise((resolve, reject)=> resolve(contacts))
    }
    findById(id){
        return new Promise((resolve)=> resolve(contacts.find((contacts)=>contacts.id === id)))
    }
}

module.exports = new ContactRepository()
