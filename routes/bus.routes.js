export default app => {
  // import buses from '../controllers/bus.controller';
  const buses = require("../controllers/bus.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", buses.create);

  // Retrieve all buses
  router.get("/", buses.findAll);

  // Retrieve all published buses
  router.get("/status", buses.findAllAvailable);

  // Retrieve a single Tutorial with id
  router.get("/:id", buses.findOne);

  // Update a Tutorial with id
  router.put("/:id", buses.update);

  // Delete a Tutorial with id
  router.delete("/:id", buses.delete);

  // Create a new Tutorial
  router.delete("/", buses.deleteAll);

  app.use('/api/buses', router);
};