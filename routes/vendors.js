const { Router } = require('express');
const { Sequelize, Op } = require('sequelize');
const { Vendor, Day, Category } = require('../models');

const vendorRouter = Router();

// create new vendor
vendorRouter.post('/', async (request, response, next) => {
  try {
    console.log(request.body);
    const vendor = await Vendor.create({
      name: request.body.name,
      products: request.body.products,
    });
    await vendor.setCategory(request.body.category);
    await vendor.addDays(request.body.days);
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
      include: [Day, Category],
      order: [[Sequelize.fn('lower', Sequelize.col('vendor.name')), 'ASC']],
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
    const vendor = await Vendor.findByPk(id, {
      include: [Day, Category],
    });
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
        id,
      },
    });
    response.send(`${targetVendor.dataValues.name} has been deleted`);
  } catch (e) {
    next(e);
  }
});


// update vendor products
vendorRouter.put('/:id/products', async (request, response, next) => {
  try {
    const { id } = request.params;
    const vendor = await Vendor.findByPk(id);
    const newProducts = request.body.products;
    vendor.update({
      products: `${vendor.products}, ${newProducts}` || vendor.products,
    });
    console.log(vendor);
    response.json({ vendor });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//

//* ***************************** POST MVP **********************************
// vendor login
// vendorRouter.get('/vendors/:id', async (request,response, next) => {
//    try {
//
//  } catch (e) {
//      next(e);
//  }
// }


module.exports = vendorRouter;
