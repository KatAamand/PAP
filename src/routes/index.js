const express = require('express');
const router = express.Router();

const invoiceRoutes = require('./invoiceRoutes');

router.use('/invoice', invoiceRoutes);

// Forside route
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
