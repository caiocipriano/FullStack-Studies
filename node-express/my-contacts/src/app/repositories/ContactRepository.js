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
    delete(id){
        return new Promise((resolve)=>{
            contacts = contacts.filter((contact)=>contact.id !== id) //filter não funciona?
            resolve()
        })
    }
    create({name, email, phone, category_id}){
        return new Promise((resolve)=>{
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id,
            }
            contacts.push(newContact)
            resolve(newContact);
        })

    }
}

module.exports = new ContactRepository()
