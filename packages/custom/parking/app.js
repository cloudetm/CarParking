'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Parking = new Module('parking');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Parking.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Parking.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Parking.menus.add({
    title: 'parking example page',
    link: 'parking example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Parking.aggregateAsset('css', 'parking.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Parking.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Parking.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Parking.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Parking;
});
