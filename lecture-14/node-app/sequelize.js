const path = require("path");
const { Sequelize } = require("sequelize");

const DB_HOST = "db";
const DB_USER = "root";
const DB_PASSWORD = "123456";

const sequelize = new Sequelize("library", DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
    sync: true,
});

module.exports = sequelize;
