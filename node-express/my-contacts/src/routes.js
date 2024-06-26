const {Router} = require('express')
const router = Router()

const contactsController = require('./app/controllers/ContactController')

router.get('/contacts', contactsController.index)
router.get('/contact/:id',contactsController.show)
router.delete('/contact/:id',contactsController.delete)
router.post('/contact',contactsController.store)

module.exports = router;
