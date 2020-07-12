const express = require('express')


const app = express();

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');


const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,  useUnifiedTopology: true}, () =>{
	console.log('db conneted')
});





app.listen(3000, () => console.log('salam'));
