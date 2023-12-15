const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'db_cloud_b3sj', // db name
  'db_cloud_b3sj_user' // user
  '6wbCAjJB21Dv8vPZWkapPue32HiD6tzE' // password
  {
    host : 'dpg-clu1lvq1hbls73e8c5r0-a'
    dialect : 'postgres'
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;