const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is running!');
});

router.routes = [
    { method: 'GET', path: '/', label: 'Placeholder until the public section is built' },
];

module.exports = router;
