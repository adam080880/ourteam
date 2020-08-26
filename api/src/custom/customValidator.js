const connect = require("../core/database");

module.exports = {
  contains: (table = "", field = "", value = "") =>
    new Promise((resolve, reject) => {
      const sql = `SELECT COUNT(*) as length FROM ? WHERE ?=?`;
      connect.query(sql, [table, field, value], (err, res) => {
        if (err) {
          reject(new Error(`Error database when trying fetch from ${table}`));
        } else {
          if (res[0].length > 0) {
            resolve(true);
          } else {
            reject(new Error(`Not found`));
          }
        }
      });
    }),
};
