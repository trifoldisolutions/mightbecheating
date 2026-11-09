const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const facades = [
    { name: 'Public', mount: '/', router: require('./routes/public') },
];

facades.forEach(({ mount, router }) => app.use(mount, router));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    facades.forEach(({ name, mount, router }) => {
        console.log(`[${name}]`);
        (router.routes || []).forEach(({ method, path, label }) => {
            const full = (mount === '/' ? '' : mount) + (path === '/' && mount !== '/' ? '' : path);
            console.log(`  ${method.padEnd(6)} http://localhost:${PORT}${full} — ${label}`);
        });
    });
});
