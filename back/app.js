const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 

const cors = require('cors')

//Create express app
const app = express(); 

//BDD
mongoose.connect('mongodb+srv://admin:admin@cluster0.hmvl2wv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}); 

const db = mongoose.connection; //const db est la connexion à la bdd déjà faite au dessus
// Quand la bdd est connectée, confirmation dans la console
db.once('open', () => {
    console.log("Connceted to mongoDb database")
})

//Middleware
// app.use(bodyParser.json()); 

app.use(cors()); 
app.use(express.json()); 
// app.use(express.urlencoded()); //Parse URL-encoded bodies

//ROUTE
app.get('/', (req, res,) => {
    res.send("Hello wordl")
})

const QuotesRoutes = require('./routes/Quotes'); 

app.use('/quotes', QuotesRoutes); 

// Start serve
app.listen(3000, console.log("Listening on port 3000")); 