import angular from 'angular'

import ngResource from 'angular-resource/index'
import uiRouter from 'angular-ui-router';
import dgVendors from './vendors';

import views from 'views/index';
import components from 'components/index';
import services from 'components/index';
import filters from 'filters/index';

const app = angular.module('discGolf', [
  ngResource, uiRouter, dgVendors,
  components, views, services, filters
]);

// app.config(function ($locationProvider) {
//   console.log('gnégné !!!')
//   $locationProvider.html5Mode(true);
// });

// app.service('Data', function ($resource) {
//   return $resource('data/2016-06.json')
// });
//
// app.controller('myController', function ($scope, Data) {
//
//   $scope.datas = Data.query();
// });
//
// app.filter('total', function () {
//   return function (scores, name) {
//     return scores.reduce((prev, value) => {
//       return prev + (value[ name ] || 0) + (value[ "par" ] || 3)
//     }, 0);
//   }
// });
// app.filter('totalToPar', function () {
//   return function (scores, name) {
//     const totalToPar = scores.reduce((prev, value) => {
//       return prev + (value[ name ] || 0)
//     }, 0);
//
//     return `${(totalToPar >= 0) ? '+' : ''}${totalToPar}`;
//   }
// });
//
// app.filter('coursePar', function () {
//   return function (scores) {
//     return scores.reduce((prev, value) => {
//       return prev + (value[ "par" ] || 3)
//     }, 0);
//   }
// });