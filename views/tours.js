import angular from 'angular';

import template from './tours.html!text'

const module = angular.module('dg.tours', []);
export default module.name;

module.config(function ($stateProvider) {

  class ToursViewController {
    constructor (tours) {

      this.tours = tours;
    }
  }

  $stateProvider
    .state('tours', {
      url: "/tours",
      template: template,
      controller: ToursViewController,
      controllerAs: '$ctrl',
      resolve: {
        tours: function ($resource) {
          return $resource('./data/tours.json').query().$promise;
        }
      }
    })
})

