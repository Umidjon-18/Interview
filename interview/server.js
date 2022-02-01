// Import modules

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const appRouter=require('./routes');


// Init app

const app = express();




// Run body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',appRouter);
//Connect ejs
app.set('view engine', 'ejs');

// Connect static folders
app.use(express.static("public"));


app.post('/photos/add', (req, res) => {
    

})


app.listen(process.env.PORT || 5000, () => {
    console.log('Server ishga tushdi ...');
})