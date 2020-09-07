const express = require('express');
const {shortenURL, redirectURL} = require('./controller');
const router = express.Router();
const {protect, protectWithApi} = require('../../middleware/auth');

router.route('/short').post(protectWithApi, shortenURL);
router.route('/:id').get(redirectURL)

module.exports = router;
