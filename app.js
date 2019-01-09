/* Use Express For App */
const express = require('express');     

/* MongoDB Connection */
const mongoose = require('mongoose');
const keys = require('./backend/config/keys.js');

/* For Fancy Console Outputs ;) */
const log = require('./backend/util/customLog.js');

/* Create the app */
const site = express();

/* Connect to mongoose */
mongoose.connect(keys.mongodb.dbURI, () => {console.log("Mongoose ✓")});

/* Open Up Server */
app.listen(8080, () => console.log("Started on 8080"));