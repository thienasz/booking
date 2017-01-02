var connection = require('../connection');
var passwordHash = require('password-hash');

function User() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from users', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.login = function(user, res) {
    connection.acquire(function(err, con) {
      con.query('select * from users where username = ?', [user.username], function(err, result) {
        con.release();
        if(result[0] && passwordHash.verify(user.password, result[0].password)) {
          res.send(result[0]);
        } else {
          res.send(false)
        }
      });
    });
  };
  
  this.create = function(todo, res) {
    todo.password = passwordHash.generate(todo.password);
    connection.acquire(function(err, con) {
      con.query('insert into users set ?', todo, function(err, result) {
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
      con.query('update users set ? where id = ?', [todo, todo.id], function(err, result) {
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
      con.query('delete from users where id = ?', [id], function(err, result) {
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

module.exports = new User();
