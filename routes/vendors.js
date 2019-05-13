const { Router } = require('express');
const { Vendor } = require('../models');

const vendorRouter = Router();

// create new vendor
vendorRouter.post('/', async (request, response, next) => {
  try {
    const vendor = await Vendor.create(request.body);
    response.json({ vendor });
  } catch (e) {
    next(e);
  }
});

// update vendor
vendorRouter.put('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const vendor = await Vendor.findByPk(id);
    vendor.update(request.body);
    response.json({ vendor });
  } catch (e) {
    next(e);
  }
});

// update vendor products
//vendorRouter.put('/:id/products', async (request, response, next) => {
//  try {
//    const { id } = request.params;
//    const vendor = await Vendor.findByPk(id);
//    vendor.update(vendor.dataValues.products +=`, ${request.body.products}`);
//    console.log(vendor);
//    response.json({ vendor });
//  } catch (e) {
//    console.log(e);
//    next(e);
//  }
// });

//
vendorRouter.get('/', async (request, response, next) => {
  try {
    const vendors = await Vendor.findAll();

    response.json({ vendors });
  } catch (e) {
    next(e);
  }
});


//****************************** POST MVP **********************************
//vendor login
//vendorRouter.get('/vendors/:id', async (request,response, next) => { 
//    try {
//
//  } catch (e) {
//      next(e);
//  }
//}



module.exports = vendorRouter;
