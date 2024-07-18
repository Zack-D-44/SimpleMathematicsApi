# Simple Mathematics API
This is an API that was made using JavaScript and Express.js that can be used to obtain the answers to simple mathematical expressions.

## Features
- Simple mathematical operations including 
    - Addition
    - Subtraction
    - Multiplication
    - Division

- RESTful API Endpoints
    - Addition endpoint: /add/value1/value2
    - Subtraction endpoint: /subtract/value1/value2
    - Multiplication endpoint: /multiply/value1/value2
    - Division endpoint: /divide/value1/value2

- Input Validation

- JSON Responses

## How To Use
1. To use this API first clone the respository using `git clone`
2. Navigate to the project directory
3. Install all dependencies using `npm install`
4. Run the command `node server.js` to start the server 
5. Make requests for example `localhost:4000/add/32/12`

## Example JSON Response
Get /add/23/43

`{
    "value1": 23,
    "value2": 43,
    "operator": "+",
    "result": 66
}`

## Technologies Used
- JavaScript
- Express.Js
- Git
- Postman (For testing)

