// getting-started.js
const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://admin:admin@cluster0.ysm9mum.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB_URL).then(()=>console.log('Connected to DB')).catch(err=>console.log(err));
