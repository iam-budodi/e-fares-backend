export default (sequelize, Sequelize) => {
  const Bus = sequelize.define('bus', {
    route: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    depart_date: {
      type: Sequelize.DATE
    },
    // depart_time: {
    //   type: Sequelize.DATETIME
    // },
    // arrival_time: {
    //   type: Sequelize.DATETIME
    // },
    total_seat: {
      type: Sequelize.INTEGER
    },
    seat_number: {
      type: Sequelize.INTEGER
    },
    seat_available: {
      type: Sequelize.INTEGER
    },
    bus_image: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    },
  });

  return Bus;
}