const express = require('express');
const validate = require('express-validation');
const clientCtrl = require('../controllers/clientController');
const validation = require('../config/validation');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    /** GET ${baseApiUrl}/client - Get list of clients **/
    .get(clientCtrl.listClients)
    /** POST /api/client - Creates a client **/
    .post(validate(validation.createSchema), clientCtrl.createClient);

router.route('/:id')
    /** GET ${baseApiUrl}/client/:id - Gets a client **/
    .get(validate(validation.getSchema), clientCtrl.getClient)
    /** PUT ${baseApiUrl}/client/:id - Updates a client **/
    .put(validate(validation.updateSchema), clientCtrl.updateClient)
    /** DELETE ${baseApiUrl}/client/:id - Removes a client **/
    .delete(validate(validation.deleteSchema), clientCtrl.deleteClient);

module.exports = router;
