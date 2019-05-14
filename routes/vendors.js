const { Router } = require('express');
const { Op } = require('sequelize');
const { Vendor, Day, Produce } = require('../models');

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

// Find All Vendors
vendorRouter.get('/', async (request, response, next) => {
  try {
    const vendors = await Vendor.findAll({
      include: [Day, Produce],
    });

    response.json({ vendors });
  } catch (e) {
    next(e);
  }
});

// Find Vendor By Id
vendorRouter.get('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const vendor = await Vendor.findByPk(id,
      { include: [Day, Produce] });

    response.json({ vendor });
  } catch (e) {
    next(e);
  }
});


// Delete Vendor
vendorRouter.delete('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const targetVendor = await Vendor.findByPk(id);
    await Vendor.destroy({
      where: {
        id: id
      },
    });
    response.send(`${targetVendor.dataValues.name} has been deleted`);
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
