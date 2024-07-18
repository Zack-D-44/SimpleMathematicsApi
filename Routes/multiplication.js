//requiring express
const express = require('express');
const {verifyType} = require('../utils');
//creating multiplication router
const multiplicationRouter = express.Router();

//handling subtraction get request
multiplicationRouter.get('/:value1/:value2', (req, res) => {
    //assigning parameters to variables
    const value1 = Number(req.params.value1);
    const value2 = Number(req.params.value2);
    
    if(verifyType('number', value1, value2)){
        //constructing response object
        const responseObject = {
            value1: value1,
            value2: value2,
            operator: 'x',
            result: value1 * value2
        };
        //sending json response
        res.status(200).send(JSON.stringify(responseObject));
    }else{
        //sending bad request response
        res.status(400).send();
    }
})