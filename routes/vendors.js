const { Router } = require('express');
const { Vendor } = require('../models');

const vendorRouter = Router();

//create new vendor
vendorRouter.post('/vendors/', async (request, response, next) => {
    try{
        const vendor = await Vendor.create(req.body);
        res.json({ vendor });
    } catch (e){
        next(e);
    }
};

//update vendor
vendorRouter.put('/vendors/:id', async (request, response, next) => {
    try {
        const { id } = request.params;
        const vendor = await Vendor.findByPk(id);
        vendor.update(request.body);
        response.json({ vendor });
    } catch (e) {
        next(e);
    }
}



//****************************** POST MVP **********************************
//vendor login
//vendorRouter.get('/vendors/:id', async (request,response, next) => { 
//    try {
//
//  } catch (e) {
//      next(e);
//  }
//}



module.exports = vendorRouter
