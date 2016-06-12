import angular from 'angular';

import template from './tours.details.html!text'

const module = angular.module('dg.tours.details', []);
export default module.name;


module.config(function ($stateProvider) {

  class ToursDetailsViewController {
    constructor (tour) {
      this.tour = tour;
    }
  }

  $stateProvider
    .state('tours.details', {
      url: "/details/:id",
      template: template,
      controller: ToursDetailsViewController,
      controllerAs: '$ctrl',
      resolve: {
        tour: function ($resource, $stateParams) {
          return $resource(`./data/${$stateParams.id}.json`).query().$promise;
        }
      }
    })
})