const { query } = require('express');
const con = require('../database/connector');
const services = require('../models/serviceModels');

module.exports.ServiceDetails = async (req, res, next) => {

    try {
        const Service_Types = await services.getServices(req.query)
        
        if (Service_Types.length !== 0) {
            res.status(200).json({ "status": true,"data":Service_Types });
        }

        else{
            res.status(200).json({ "status": true,"data":"no_data"});
        }

    } 
    catch (e) {
        res.status(200).json({ "status": false, "result": 'Bad request!'});
    }


}