const {Router} = require('express')
const router = Router()

const contactsController = require('./app/controllers/ContactController')

router.get('/contacts', contactsController.index)
router.get('/contact/:id',contactsController.show)
router.get('/contact/:id',contactsController.delete)


module.exports = router;
