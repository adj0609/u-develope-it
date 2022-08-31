const mysql2 = require('mysql2');
//connect to database
const db = mysql2.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '12Cribben!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );



  module.exports = db;