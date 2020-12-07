import express from 'express';
// import buses from '../controllers/busController';

const busRouter = express.Router();
const buses = require('../controllers/busController');

busRouter.get('/', buses.findAll);
busRouter.get('/status', buses.findAllAvailable);
busRouter.get('/:id', buses.findOne);
busRouter.post('/', buses.create);
busRouter.delete('/', buses.deleteAll);
busRouter.delete('/:id', buses.delete);
busRouter.put('/:id', buses.update);

module.exports = busRouter;
