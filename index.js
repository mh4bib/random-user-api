const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnect = require('./utils/dbConnect');
const category1Routes = require('./routes/v1/category1.route');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// database connection 
dbConnect();

app.use("/api/v1/category1", category1Routes);

app.get('/', (req, res) => {
    res.send('Hello from boiler plate')
})

//in case there is no route or any problem
app.all('*', (req, res)=>{
    res.send('No route found');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})