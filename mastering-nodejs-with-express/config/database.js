const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "mastering-nodejs-with-express", // Database name
  "postgres", // Username
  "123456", // Password
  {
    host: "localhost", // Connect to your local database
    dialect: "postgres", // Tell sequelize to use Postgres
  }
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function sync() {
  try {
    await sequelize.authenticate();
    console.log("Connection synced successfully");
  } catch (error) {
    console.error("Unable to sync to the database:", error);
  }
}

module.exports = { sequelize, connect, sync };
