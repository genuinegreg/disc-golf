import angular from 'angular'
import ngResource from 'angular-resource'

const app = angular.module('discGolf', [ 'ngResource' ]);

app.service('Data', function ($resource) {
  return $resource('data/2016-06.json')
});

app.controller('myController', function ($scope, Data) {

  $scope.datas = Data.query();
});

app.filter('total', function () {
  return function (scores, name) {
    return scores.reduce((prev, value) => {
      return prev + (value[ name ] || 0) + (value[ "par" ] || 3)
    }, 0);
  }
});
app.filter('totalToPar', function () {
  return function (scores, name) {
    const totalToPar = scores.reduce((prev, value) => {
      return prev + (value[ name ] || 0)
    }, 0);

    return `${(totalToPar >= 0) ? '+' : ''}${totalToPar}`;
  }
});

app.filter('coursePar', function () {
  return function (scores) {
    return scores.reduce((prev, value) => {
      return prev + (value[ "par" ] || 3)
    }, 0);
  }
});