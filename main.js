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

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
});
