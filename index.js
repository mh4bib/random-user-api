const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnect = require('./utils/dbConnect');
const userRoutes = require('./routes/v1/user.route');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// database connection 
dbConnect();

app.use("/api/v1/user", userRoutes);

app.get('/', (req, res) => {
    res.send('Hello from random user api')
})

//in case there is no route or any problem
app.all('*', (req, res)=>{
    res.send('No route found');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})