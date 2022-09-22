const { request } = require('express');
const express = require('express'); 
const quotes = require('../models/Quotes');
const router = express.Router(); 
const Quotes = require('../models/Quotes'); 

// Get all routes
router.get('/', async (req, res,) => {
    const quotes = await Quotes.find(); 
    res.json(quotes); 
    // console.log("Get all routes "); // Display dans la console VS
    // res.send("Get all routes"); // display dans la réponse => navigateur 
})

// Create new quote
router.post('/new', async (req, res) => {
    const newQuote = new Quotes(req.body); 
    const saveQuote = await newQuote.save(); 
    res.json(saveQuote)
    // res.send(req.body); 
}); 

// Get specific quote
router.get('/get/:id', async (req, res) => {
    const q = await Quotes.findById({ _id: req.params.id }); 
    res.json(q); 
}); 

//Delete
router.delete('/delete/:id', async (req, res) => {
    const result = await Quotes.findByIdAndDelete({_id: req.params.id}); 
    res.json(result); 
}); 

// update 
router.patch('/update/:id', async (req, res) => {
    const q = await Quotes.UpdateOne({_id: req.params.id}, { $set: req.body }); 
    res.json(q); 
}); 

// Random quote
router.get('/random', async (req, res) => {
    const count = await Quotes.countDocuments(); 
    const random = Math.floor(Math.random() * count); 
    const q = await Quotes.findOne().skip(random); 

    res.json(count); 
}); 

module.exports = router ; 