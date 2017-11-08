import angular from 'angular';

class sidebarController {
  constructor($element, $window, $location) {
    'ngInject';

    this.location = $location;
    
  }

  isActive(path) {
    const option = path.substr(1, path.length);
    return this.location.path().substr(0, path.length) === path;
  }
}

export default sidebarController;
