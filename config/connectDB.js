const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "72.61.238.64",
  user: "yarwin",
  password: "eR7cj35ks4882HJy",
  database: "yarwin",
});

export default connection;
