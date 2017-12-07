var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {

    return result;
    });
  }
};

module.exports = orm;
//---------------
var orm = {
    selectAll: function(whatToSelect, tableInput, orderColumn) {
      var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
      var query = connection.query(queryString, [whatToSelect, tableInput, orderColumn], function(err, result) {
        if (err) {
          throw err;
        }
        console.log('====================select==============');
        console.log(result);
      });
      console.log(query.sql);
    },
    insertOne: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
      console.log(queryString);
  
      var query = connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log('===============select where==============');
        console.log(result);
      });
      console.log(query.sql);
    },
    updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
      var queryString = "SELECT ?? FROM ?? AS tOne";
      queryString += " LEFT JOIN ?? AS tTwo";
      queryString += " ON tOne.?? = tTwo.??";
  
      console.log(queryString);
  
      var query = connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
        err,
        result
      ) {
      console.log('=================left join==============');
        console.log(result);
      });
      console.log(query.sql);
    }
  };
  
  module.exports = orm;
  
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.