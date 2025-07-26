const express = require('express');
const router = express.Router();
const { addMaterial, getSupplierOrders } = require('../controllers/supplierController');
const requireRole = require('../middleware/roleHandler');
const protectHandler = require('../middleware/protectHandler');

router.use(protectHandler, requireRole('supplier'));

router.post('/add-material', addMaterial);
router.get('/orders', getSupplierOrders);

module.exports = router;
