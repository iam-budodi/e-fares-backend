export default (sequelize, Sequelize) => {
  const Bus = sequelize.define('bus', {
    busName: {
      type: Sequelize.STRING
    },
    busRoute: {
      type: Sequelize.STRING
    },
    busCategory: {
      type: Sequelize.STRING
    },
    departDate: {
      type: Sequelize.DATE
    },
    // depart_time: {
    //   type: Sequelize.DATETIME
    // },
    // arrival_time: {
    //   type: Sequelize.DATETIME
    // },
    totalSeats: {
      type: Sequelize.INTEGER
    },
    seatSelected: {
      type: Sequelize.INTEGER
    },
    seatAvailable: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    },
    imageUrl: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    },
  });

  return Bus;
};
