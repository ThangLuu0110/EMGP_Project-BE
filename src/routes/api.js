const express = require('express');
const APIServices = require('../services/APIServices');

let route = express.Router(); 

const initAPIRoute = (app) => {
    //Get user
    route.get('/employees/detail', APIServices.getAllEmployees)
    //Get specific user
    route.get('/employees/detail/:empId', APIServices.getSpecificEmployees)
    //Create new user
    route.post('/employees/create', APIServices.addNewEmployees);
    //Update specific user
    route.post('/employees/update/:empId', APIServices.updateSpecificEmployee);
    //Delete specific user
    route.delete('/employees/delete/:empId', APIServices.deleteSpecificEmployee);
    return app.use('/api/v1/', route)
}

module.exports = initAPIRoute;