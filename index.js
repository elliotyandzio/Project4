const express = require('express');
const app = express();
const router = require('./config/router');
const bodyParser = require('body-parser');
const {port, dbURI} = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

app.use(bodyParser.json());
app.use('/api', router);


app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express running on port ${port}`));

module.exports = app;
