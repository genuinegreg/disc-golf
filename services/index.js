import angular from 'angular';

import ToursService from './ToursService';

const module = angular.module('services', [
  ToursService
]);
export default module.name;