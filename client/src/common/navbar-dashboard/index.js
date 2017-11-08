import angular from 'angular';
import navbarDashboardComponent from './navbar.dashboard.component';

const navbarDashbboardModule = angular.module('navbar-dashboard', [
  'ui.router',
  'ngCookies'
])

  .component('navbarDashboard', navbarDashboardComponent)
  .name;


export default navbarDashbboardModule;
