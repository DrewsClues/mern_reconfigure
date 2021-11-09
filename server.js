const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const http = require("http");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; //Heroku should use whichever port is available

const routes = require('./routes/api')



//Ping this application
//setInterval(function() {
    //console.log("Pinging This application")
    //http.get("http://bankapptest.herokuapp.com/");
//}, 300000); // every 5 minutes (300000)

//Ping the banking application
//setInterval(function() {
    //console.log("Pinging Banking application")
    //http.get("http://andrewthomasfsbankapplication.herokuapp.com/");
//}, 350000); // every 5 minutes (300000)



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_bank', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!')
})


app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(express.static('./client/build'))

// HTTP request logger
app.use(morgan('tiny'));
app.use('/', routes);




// Step 3
// if (process.env.NODE_ENV === 'Production'){
// //     app.use(express.static('client/build'))
// }

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
