'use strict';

/**
 * @ngdoc service
 * @name yoAngularVirginApp.base
 * @description
 * # base
 * Service in the yoAngularVirginApp.
 */
angular.module('yoAngularVirginApp')
  .service('base', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var factory = {};

    factory.ONE_DEGREE = Math.PI / 180.0;

    factory.CAMERA_MOVE_DELTA = 1.0;
    // CAMERA_ROT_DELTA is in degrees
    factory.CAMERA_ROT_DELTA = 10;

    //Colors
    factory.COLOR_YELLOW = new THREE.Color(100,255,0);
    factory.COLOR_GREEN = new THREE.Color(0,255,0);
    factory.COLOR_BLUE = new THREE.Color(0,0,255);
    factory.COLOR_ORANGE = new THREE.Color(255,165,0);
    factory.COLOR_WHITE = new THREE.Color(255,255,255);
    factory.COLOR_BROWN = new THREE.Color(139,69,19);

    return factory;
            
//webvr-decorator-> file updated on: 12/2/2015, 9:10:48 PM
  });

