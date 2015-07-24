import TrackOrderService from './track-order.service';
import TrackOrderCtrl from './track-order.controller';

angular
  .module('app.trackOrder', ['ui.router'])
  .service('TrackOrderService', TrackOrderService)
  .controller('TrackOrderCtrl', TrackOrderCtrl)
  .config(function($stateProvider) {
    $stateProvider
      .state('trackOrder', {
        url: '/track-order/:id',
        views: {
          'main': {
            templateUrl: 'src/track-order/track-order.tpl.html',
            controller: 'TrackOrderCtrl as vm'
          },
          'nav': {
            templateUrl: 'src/navigation/navigation.tpl.html'
          }
        }
      });
  });