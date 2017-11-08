import angular from 'angular';
import Dashboard from './dashboard';
import ErrorPages from './error-pages';

const components = angular.module('app.components', [
  Dashboard,
  ErrorPages,
])
  .name;

export default components;
