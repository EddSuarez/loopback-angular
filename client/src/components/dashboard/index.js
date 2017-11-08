import constants from 'services/constants';
import angular from 'angular';
import dashboardComponent from './dashboard.component';

const dashboardModule = angular.module('dashboard', [
  'ui.router',
  constants
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>',
        parent: 'dashboardLayout'
      });
  })
  .component('dashboard', dashboardComponent)
  .name;

export default dashboardModule;
