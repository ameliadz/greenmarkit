const { Sequelize } = require('sequelize');

/* Synchronize Model with Database */
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/greenmarkit_db', {
  database: 'greenmarkit_db',
  dialect: 'postgres',
  define: {
    underscored: true,
    timestamps: false,
  },
});

/* Model Definitions */
const Vendor = db.define('vendor', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  products: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

const Category = db.define('category', {
  name: Sequelize.STRING,
});

const Day = db.define('day', {
  name: Sequelize.STRING,
});

/* Model Associations */
Vendor.belongsTo(Category);

Category.hasMany(Vendor);

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
  Category,
  Day,
};
