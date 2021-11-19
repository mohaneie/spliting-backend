const express = require('express');
const router = express.Router();
const Customer = require('../controllers/index');

router.route('/split').post(async(req, res) => {
    try {
        const response = await Customer.createSplitMethod(req.body);
        return res.status(200).json({ message: 'Split is created successfully', response });
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;