const express = require('express');
const router = express.Router();

const provider_controller = require('../controllers/provider.controller');

// GET call to retrieve providers
router.get('/', provider_controller.provider_readAll);
// DELETE call to delete single provider
router.delete('/:id/delete', provider_controller.provider_delete);
// POST call to delete multiple providers, DELETE did not allow request body for array of ID's
router.post('/multiDelete', provider_controller.provider_deleteMultiple);
// POST call to create single provider
router.post('/create', provider_controller.provider_create);
// POST call to reset providers on DB
router.post('/reset', provider_controller.provider_reset);

module.exports = router;
