const ContactRepository = require('../repositories/ContactRepository');
const contactRepository = require('../repositories/ContactRepository')

class ContactController {
    async index(request, response){
        const contacts = await contactRepository.findAll();
        response.json(contacts)
    }

    async show(request, response){
        const {id} = request.params;
        const contact = await contactRepository.findById(id)
        if(!contact){
            return response.status(404).json({error:'Não encontrrado '})
        }
        response.json(contact)
    }

    async store(request, response){
        const {name, email,phone,contact_id} = request.body;

        const emailCheck = await contactRepository.findByEmail(email)
        if(emailCheck){
            return response.status(404).json({error:'Email já existe'})
        }
        const contact = await contactRepository.create({
            name, email,phone,contact_id})

        request.json(contact)
    }

    async delete(request,response){
        const {id} = request.params;
        const contact = await contactRepository.findById(id)
        if(!contact){
            return response.status(400).json({error:'Não encontrado'})
        }
        await ContactRepository.delete(id)
        response.sendStatus(204)
    }
}
module.exports = new ContactController();
