'use strict';

describe('Directive: choozGuy', function () {

  // load the directive's module
  beforeEach(module('choozApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chooz-guy></chooz-guy>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the choozGuy directive');
  }));
});
