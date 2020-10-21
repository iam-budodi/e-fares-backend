import db from '../models';
const Bus = db.buses;
const Op = db.Sequelize.Op;

// Create and Save a new Bus
export function create(req, res) {
  // Validate request
  if (!req.body.route) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Bus
  const bus = {
    route: req.body.route,
    category: req.body.category,
    departDate: req.body.departDate,
    totalSeat: req.body.totalSeat,
    seatNumber: req.body.seatNumber,
    seatAvailable: req.body.seatAvailable,
    price: req.body.price,
    busImage: req.body.busImage,
    status: req.body.status ? req.body.status : false,
  };

  // Save Bus in the database
  Bus.create(bus)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Error occurred while creating the Bus!',
      });
    });
}

// Retrieve all Buses from the database
export function findAll(req, res) {
  const route = req.query.route;
  var condition = route ? {route: {[Op.iLike]: `%${route}%`}} : null;

  Bus.findAll({where: condition})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Error occurred while retrieving Buses!',
      });
    });
}

// Find a single Bus with an id.
export function findOne(req, res) {
  const id = req.params.id;

  Bus.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Bus with id=' + id,
      });
    });
}

// Update a Bus by the id in the request
export function update(req, res) {
  const id = req.params.id;

  Bus.update(req.body, {
    where: {id: id},
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Bus was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Bus with id=${id}. Maybe Bus was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Bus with id=' + id,
      });
    });
}

// Delete a Bus with the specified id in the request
const _delete = (req, res) => {
  const id = req.params.id;

  Bus.destroy({
    where: {id: id},
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Bus was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Bus with id=${id}. Maybe Bus was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Bus with id=' + id,
      });
    });
};
export {_delete as delete};

// Delete all Buses from the database.
export function deleteAll(req, res) {
  Bus.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({message: `${nums} Buses were deleted successfully!`});
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Buses.',
      });
    });
}

// Find all available Buses
export function findAllAvailable(req, res) {
  Bus.findAll({where: {status: true}})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Buses.',
      });
    });
}
