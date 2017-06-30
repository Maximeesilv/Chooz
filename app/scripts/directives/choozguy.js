'use strict';

/**
 * @ngdoc directive
 * @name choozApp.directive:choozGuy
 * @description
 * # choozGuy
 */
angular.module('choozApp')
  .directive('choozGuy', function () {
    return {
      templateUrl: "views/directives/chooz-guy.html",
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.$watch(attrs.isHappy, function(value){
				  console.log(value);
          scope.isHappy = value;
			  });
      }
    };
  });
