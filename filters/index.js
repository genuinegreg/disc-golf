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
      return prev + (value[ "par" ] || 3)
    }, 0);
  }
});