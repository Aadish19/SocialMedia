const express = require('express');
const { appendFileSync } = require('fs');
const app = express();

const db = require('./config/mongoose');

const port = 8000;
const path = require('path');
const cookieParser = require('cookie-parser')

//Middle Ware
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//using ejs
app.set('view engine','ejs');
app.set('views','./views')

// use express router
app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(err){
        console.error(console,`Error in handling port number ${err}`);
        return;
    }

    console.log(`Server is up and running successfully on port ${port}`);

})