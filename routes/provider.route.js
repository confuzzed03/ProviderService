const express = require('express');
const router = express.Router();

const provider_controller = require('../controllers/provider.controller');

router.get('/', provider_controller.provider_readAll);
router.delete('/:id/delete', provider_controller.provider_delete);
router.post('/create', provider_controller.provider_create);
router.post('/reset', provider_controller.provider_reset);

module.exports = router;
