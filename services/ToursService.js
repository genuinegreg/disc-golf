import angular from 'angular';

const module = angular.module('ToursService', []);
export default module.name;

module.service(module.name, function ($q) {
  class ToursServices {
    constructor ($q) {
      this.data = [
        [
          {
            title: 'plop1',
            id: '123'
          },
          {
            title: 'plop2',
            id: '1234'
          },
        ]
      ]
    }

    getTours () {
      return $q.when(this.data)
    }

    getTour (id) {
      this.data.find((tour) => {
        if (tour.id === id) {
          return tour;
        }
      })
    }
  }

  return new ToursServices();
})