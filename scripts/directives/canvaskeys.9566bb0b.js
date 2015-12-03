'use strict';

/**
 * @ngdoc directive
 * @name yoAngularVirginApp.directive:canvasKeys
 * @description
 * # canvasKeys
 */
angular.module('yoAngularVirginApp')
  .directive('canvasKeys', function ( $document, $rootScope, main, base) {
//webvr-decorator-> code commented out on: 12/2/2015, 9:10:48 PM
//    return {
//      template: '<div></div>',
//      restrict: 'E',
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the canvasKeys directive');
//      }
//    };
//webvr-decorator-> end code commenting

    return {
      
      restrict: 'A',

      link: function postLink(scope, element, attrs) {
        
        var kbdHandler = function(event) {

          // prevent browser from handling as well
          event.preventDefault();

          switch( event.keyCode) {
            case 'S'.charCodeAt(0):
              main.camera.translateZ(base.CAMERA_MOVE_DELTA); 
            break;
            
            case 'W'.charCodeAt(0):
              main.camera.translateZ(-base.CAMERA_MOVE_DELTA);
            break;
            
            case 'A'.charCodeAt(0):
              main.camera.translateX(base.CAMERA_MOVE_DELTA);
            break;
            
            case 'D'.charCodeAt(0):
              main.camera.translateX(-base.CAMERA_MOVE_DELTA);
            break;

            case 'Q'.charCodeAt(0):
              main.cube.rotation.z +=  base.ONE_DEGREE * base.CAMERA_ROT_DELTA;
            break;
            
            case 'E'.charCodeAt(0):
              main.cube.rotation.z +=  -base.ONE_DEGREE * base.CAMERA_ROT_DELTA;
            break;
            
            case 'P'.charCodeAt(0):
              main.camera.translateY(-base.CAMERA_MOVE_DELTA);
            break;
            
            case 'N'.charCodeAt(0):
              main.camera.translateY(base.CAMERA_MOVE_DELTA);
            break;
            
            case 'R'.charCodeAt(0):
              main.BasePosition.copy(main.INIT_POSITION);
              main.BaseRotation.copy(main.INIT_ROTATION);
            break;            
          }
        };

        // I have to bind to $document for runtime and to element for testing.  I think I should
        // be able to use element for both, but for now just bind to both
        $document.on("keydown", kbdHandler);
        element.on("keydown", kbdHandler);
      }
    };
//webvr-decorator-> file updated on: 12/2/2015, 9:10:48 PM
  });


