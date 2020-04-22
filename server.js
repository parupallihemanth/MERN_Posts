const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./config/db')

const postRoutes = require('./routes/post')
const app = express();


dotenv.config({path:'./config/.env'});
connectDB();


app.use( express.json());
app.use( cors());
app.use('/api', postRoutes);







PORT = process.env.PORT || 7000;
app.listen( PORT , ( ) => console.log(`Server is running on ${PORT}`));