const express = require('express');
// const { authJwt } = require('../middleware');
const controller = require('../controllers/payment.controller');

// Set The Express Router
const router = express.Router();

router.post('/cb/direct-debit', controller.getCBDirectDebit);
router.post('/cb/va-created', controller.getCBVACreated);
router.post('/cb/va-paid', controller.getCBVAPaid);
router.post('/cb/invoice-paid', controller.getInvoicePaid);
router.post('/cb/ewallet', controller.getCBEWallet);
router.post('/invoice/create', controller.createInvoice);
router.get('/invoice/success', controller.getInvoiceSuccess);
router.get('/invoice/failed', controller.getInvoiceFailed);

module.exports = router;
