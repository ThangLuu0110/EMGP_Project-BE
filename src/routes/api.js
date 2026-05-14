const express = require('express');
const APIServices = require('../services/APIServices');

let route = express.Router(); 

const initAPIRoute = (app) => {
    route.get('/employees', APIServices.getAllEmployees)
    route.get('/employees/:empId', APIServices.getSpecificEmployees)

    return app.use('/api/v1/', route)
}

module.exports = initAPIRoute;