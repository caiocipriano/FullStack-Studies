const contactRepository = require('../repositories/ContactRepository')

class ContactController {
    async index(request, response){
        const contacts = await contactRepository.findAll();
        response.json(contacts)
    }

    async show(request, response){
        const {id} = request.params;
        const contact = await ContactController.findById(id)
        if(!contact){
            return response.status(404).json({error:'Não encontrrado '})
        }
        response.json(contact)
    }
}
module.exports = new ContactController();
