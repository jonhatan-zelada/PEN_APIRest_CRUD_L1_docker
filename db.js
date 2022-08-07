// Import the postgres client
const Pool = require('pg').Pool;


const pool = new Pool({
    password: "admin1234",
    user: "admin",
    host: "postgresql_database",
    database: "productDb",
  });
  
  module.exports = pool;