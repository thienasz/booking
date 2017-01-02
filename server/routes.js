var user = require('./controlers/user');
var booking = require('./controlers/booking');

module.exports = {
  configure: function(app) {

    app.get('/', function (req, res) {
      var filePath = __dirname + '/dist/index.html';
      res.sendfile(filePath);
    });

    app.get('/user/', function(req, res) {
      user.get(res);
    });

    app.post('/user/', function(req, res) {
      user.create(req.body, res);
    });

	app.post('/login/', function(req, res) {
      user.login(req.body, res);
    });
	
    app.put('/user/', function(req, res) {
      user.update(req.body, res);
    });

    app.delete('/user/:id/', function(req, res) {
      todo.delete(req.params.id, res);
    });

    app.get('/booking/', function(req, res) {
      booking.get(res);
    });

    app.get('/booking/user', function(req, res) {
      booking.getOldUsers(res);
    });

    app.get('/booking/today/', function(req, res) {
      booking.getToday(res);
    });

    app.post('/booking/', function(req, res) {
      booking.create(req.body, res);
    });

    app.put('/booking/', function(req, res) {
      booking.update(req.body, res);
    });

    app.delete('/booking/:id/', function(req, res) {
      booking.delete(req.params.id, res);
    });
  }
};
