import angular from 'angular';

import tours from './tours'
import toursDetails from './tours.details'

const module = angular.module('dgApp.views', [
  tours, toursDetails
]);
export default module.name;

module.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise("/tours");
});