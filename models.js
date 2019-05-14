const { Sequelize } = require('sequelize');

/* Synchronize Model with Database */
const db = new Sequelize({
  database: 'greenmarkit_db',
  dialect: 'postgres',
  define: {
    underscored: true,
    timestamps: false,
  },
});

/* Model Definitions */
const Vendor = db.define('vendor', {
  name: Sequelize.STRING,
  products: Sequelize.TEXT,
}, {
  timestamps: true,
});

const Produce = db.define('produce', {
  name: Sequelize.STRING,
});

const Day = db.define('day', {
  name: Sequelize.STRING,
});

/* Model Associations */
Vendor.belongsTo(Produce);

Produce.hasMany(Vendor);

Vendor.belongsToMany(Day, {
  through: 'schedule',
  foreignKey: 'vendor_id',
});

Day.belongsToMany(Vendor, {
  through: 'schedule',
  foreignKey: 'day_id',
});

module.exports = {
  db,
  Vendor,
  Produce,
  Day,
};
