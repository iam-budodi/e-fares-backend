export default (sequelize, Sequelize) => {
  const Bus = sequelize.define('bus', {
    route: {
      type: Sequelize.STRING
    },
    category: {
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
    totalSeat: {
      type: Sequelize.INTEGER
    },
    seatNumber: {
      type: Sequelize.INTEGER
    },
    seatAvailable: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    },
    busImage: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    },
  });

  return Bus;
}