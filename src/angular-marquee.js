/*
 * angular-marquee v0.1.0
 * https://github.com/emn178/angular-marquee
 *
 * Copyright 2014, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function(angular) {
  angular.module('ngMarquee', [])
  .directive('ngMarquee', ['$parse', function($parse) {
    return {
      restrict: "E",
      scope: {
        options: '=ngOptions'
      },
      link: function (scope, element) {
        element.marquee(scope.options);
      }
    };
  }]);
})(angular);
