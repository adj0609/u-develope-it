const express = require('express');
const mysql2 = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//Express Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// Connect to database
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

  db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });


app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log('server running on port ${PORT}');
});