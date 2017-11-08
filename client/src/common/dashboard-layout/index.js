import navbarDashboard from 'common/navbar-dashboard';
import sidebar from 'common/sidebar';
import baseLayout from 'common/base-layout';
import angular from 'angular';
import dashboardLayoutComponent from './dashboard.layout.component.js';

const dashboardLayoutModule = angular.module('dashboardLayout', [
  baseLayout,
  navbarDashboard,
  sidebar
])
  .component('dashboardLayout', dashboardLayoutComponent)
.name;

export default dashboardLayoutModule;

