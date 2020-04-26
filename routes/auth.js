const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get user
// @access  Private
router.get('/', (req,res) => {
    res.send('Get logged in');
});

// @route   POST api/auth
// @desc    Log in a user
// @access  Public
router.post('/', (req,res) => {
    res.send('Login a user');
});

module.exports = router;