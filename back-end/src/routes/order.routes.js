const router = require('express').Router();
const OrderController = require('../controllers/order.controller');

router.get('/', OrderController.getAll);

module.exports = router;
