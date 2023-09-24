const config = require("../../../knexfile.jsx");

const knex = require("knex");

const connection = knex(config.development);

module.exports = connection;