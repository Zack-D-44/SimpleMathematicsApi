const express = require('express');

const additionRouter = express.Router();

additionRouter.get('/:value1/:value2', (req, res) => {
    //assigning parameters to variables
    const value1 = Number(req.params.value1);
    const value2 = Number(req.params.value2);

    //constructing response object
    const responseObject = {
        result: value1 + value2
    };
    //sending json response
    res.send(JSON.stringify(responseObject));

})

module.exports = {
    additionRouter
};