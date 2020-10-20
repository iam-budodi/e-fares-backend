import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from '../config/db.config';
import Sequelize from 'sequelize';

// @ts-ignore
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  operatorsAliases: 0,
  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.buses = require('./bus.model').default(sequelize, Sequelize);

export default db;

