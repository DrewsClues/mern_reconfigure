const express = require('express');

const router = express.Router();

const BankPost = require('../models/bankPost');

//Routes
router.get('/', (req, res) =>{
    const data = {
        welcome: "Hello! Welcome to mernapp!"
    };
    res.json(data.welcome);
})


router.get('/data', (req, res) =>{
    BankPost.find({ })
    .then((data) =>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch(() =>{
        console.log('error: ', daerrorta)
        res.json(data);
    })
})


router.get('/name', (req, res) =>{
    const data = {
        username: 'andrew',
        age: 25
    };
    res.json(data);
})

//Simple Post request
router.post('/save', (req, res) => {
    console.log('name: ', req.body);
    res.json({
        msg: "We received your data!"
    });
});

// get param method route

// router.get('/givename/:name', function (req, res) {
//     req.params.name
//     console.log(`Your name is ${req.params.name}`);
//     res.json({
//         name: req.params.name
//     });
// })


router.get('/givename/:name', function (req, res) {
    console.log('name: ', req.params.name)
    const data = {name: req.params.name}

    const newBankPost = new BankPost(data);

    newBankPost.save((error) => {
        if (error) {
            res.status(500).json({
                msg: 'Sorry, internal server errors'});
            return;
        } 
        return
            //BankPost
            res.json({
                msg: 'Your data has been saved!'
        })
    });
})

module.exports = router;
