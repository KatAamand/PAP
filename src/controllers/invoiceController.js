const invoiceService = require('../services/invoiceService.js'); 

exports.getInvoicePage = (req, res) => {
    res.render('invoice');
};

exports.generateInvoice = async (res, req) => {
    const invoice = await invoiceService.createInvoice(req.body); 
    res.json({ success: true, invoice}); 
}; 