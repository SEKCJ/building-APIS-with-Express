const express = require('express');
const path = require('path');
const cors = require('cors');
const apiRoutes = require('./routes');

let app = express()

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')))

app.use('/api', apiRoutes);

app.listen(3030)