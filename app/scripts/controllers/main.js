'use strict';

/**
 * @ngdoc function
 * @name choozApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the choozApp
 */
angular.module('choozApp')
  .controller('MainCtrl', function () {
    var ctrl = this;
    ctrl.userInput = "";
    ctrl.userChooz = [];
    ctrl.countElements = ctrl.userChooz.length;
    ctrl.isHappy = false;

    ctrl.addUserChooz = function() {
      if(ctrl.userInput === "") {
        alert("Euh... Mets quelque chose non ?");
        return;
      }
      ctrl.userChooz.push(ctrl.userInput);
      ctrl.userInput = "";
      ctrl.countElements = ctrl.userChooz.length;
    }

    ctrl.getResult = function() {
      if(ctrl.isHappy) return;
      ctrl.result = ctrl.userChooz[Math.floor(Math.random()*ctrl.userChooz.length)];
      ctrl.countElements = ctrl.userChooz.length;
      ctrl.isHappy = true;
      ctrl.cleanChooz(true);
    }

    ctrl.cleanChooz = function(value) {
      ctrl.userChooz = [];
      ctrl.isHappy = value;
      ctrl.countElements = ctrl.userChooz.length;
    }
  });
