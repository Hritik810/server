// Import express and mongooese packages
const express = require('express');
const mongoose = require('mongoose');

//import router
const routes = require('./Routers/index');

const host = "localhost";
const port = 8900;
// MogngoDB connecting string
const uri = "mongodb+srv://Zoufisha:Zoufi2021@cluster0.40etm.mongodb.net/DB-1?retryWrites=true&w=majority";
// const uri = "mongodb+srv://dbuser:Ritik@123@cluster0.40etm.mongodb.net/DB-1?retryWrites=true&w=zomato";
//  const uri ="mongodb+srv://Zomato:Ritik@123@cluster0.gerl4ex.mongodb.net/test";
// mongodb+srv://zomato123:<password>@cluster0.fvgrik2.mongodb.net/test
//   const uri= "mongodb+srv://zomato123:Ritik@123@cluster0.fvgrik2.mongodb.net/test";
const app = express();
// Middleware to handle json date
app.use(express.json());

// Handling CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type', 'Authorization');
    next();
})

// Navigate all req to router
app.use('/',routes);

// Connect to Database and starting server
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}).
    then(() => {
        app.listen(process.env.PORT || 8900,host,() => {
            console.log(`Server running at ${host}:${port}`);
        });
    }).
    catch((err) => {
        console.log(err);
    }
)
