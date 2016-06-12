import angular from 'angular';

const module = angular.module('dg.filters', [])
export default module.name;

module.filter('total', function () {
  return function (scores, name) {
    return scores.reduce((prev, value) => {
      return prev + (value[ name ] || 0) + (value[ "par" ] || 3)
    }, 0);
  }
});
module.filter('totalToPar', function () {
  return function (scores, name) {
    const totalToPar = scores.reduce((prev, value) => {
      return prev + (value[ name ] || 0)
    }, 0);

    return `${(totalToPar >= 0) ? '+' : ''}${totalToPar}`;
  }
});

module.filter('coursePar', function () {
  return function (scores) {
    return scores.reduce((prev, value) => {

      if (value[ "par" ] === -1) {
        return prev
      }

      return prev + (value[ "par" ] || 3)
    }, 0);
  }
});

module.filter('peoples', function () {
  return function (tour) {
    let peoples = {};

    tour.forEach(function (round) {
      round.peoples.forEach(function (people) {
        peoples[ people ] = people;
      })
    });

    return peoples;

  }
});

module.filter('tourTotal', function () {
  return function (tour, name) {

    let scores = [];

    angular.forEach(tour, function (round) {
      scores.push(round.scores.map(function (holeScores) {

        if (holeScores[ 'par' ] === -1) {
          return 0;
        }

        return holeScores[ name ] || 0;
      }).reduce(function (prev, value) {
        return prev + value
      }, 0));
    })

    var total = scores.reduce(function (prev, value) {
      return prev + value;
    }, 0)
    return `${total >= 0 ? '+' : ''}${total}`;
  }
});

