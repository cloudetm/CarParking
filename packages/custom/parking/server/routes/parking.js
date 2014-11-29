'use strict';

// The Package is past automatically as first parameter
module.exports = function(Parking, app, auth, database) {
  
  app.route('/parking', function(req, res, next){
    res.send('Application index page');
  });

  app.get('/parking/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/parking/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/parking/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/parking/example/render', function(req, res, next) {
    Parking.render('index', {
      package: 'parking'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
