'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.shelters = [];
    }

    $onInit() {
      this.$http.get('/api/shelters')
        .then(response => {
          this.shelters = response.data;
        });
    }

    addThing() {
      if (this.newShelter) {
        this.$http.post('/api/shelters', {
          name: this.newShelter
        });
        this.newShelter = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/shelters/' + thing._id);
    }
  }

  angular.module('wwwApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
