const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "31.97.233.100",
  user: "YaarClub",
  password: "yMt7rzrSfRY3wNW8",
  database: "yaarclub",
});

export default connection;

// const mysql = require("mysql2/promise");

// const connection = mysql.createPool({
//   host: "31.97.233.100",
//   user: "91club",
//   password: "91clubplaynosis",
//   database: "91club",
// });

// export default connection;
