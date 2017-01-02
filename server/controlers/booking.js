var connection = require('../connection');

function Booking() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from booking', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getOldUsers = function(res) {
    connection.acquire(function(err, con) {
      con.query('select name from booking group by name', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getToday = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from booking where DATE(date) like CURDATE()', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('insert into booking set ?', todo, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO creation failed'});
        } else {
          res.send({status: 0, message: 'TODO created successfully'});
        }
      });
    });
  };

  this.update = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('update booking set ? where id = ?', [todo, todo.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO update failed'});
        } else {
          res.send({status: 0, message: 'TODO updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from booking where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}

module.exports = new Booking();
