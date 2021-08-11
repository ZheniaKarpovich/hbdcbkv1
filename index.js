require('dotenv').config()

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200);
});

app.listen(process.env.PORT, () => console.log(`Server listening on port: ${process.env.PORT}`));