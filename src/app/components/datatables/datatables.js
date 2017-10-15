'use strict';

var app = angular.module('TablaDemo', []);
app.controller('TablaCtrl', ['$scope', function($scope) {

app.directive('editableTd', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.css("cursor", "pointer");
      element.attr('contenteditable', 'true');

      element.bind('blur keyup change', function() {
        scope.lista[attrs.row][attrs.field] = element.text();
        scope.$digest();
      });

      element.bind('click', function() {
        document.execCommand('selectAll', false, null)
      });
    }
  };
}]);
