//import CartService from './cart.service';
import IncomingCtrl from './incoming/incoming.controller';
import DeliveryCtrl from './delivery/delivery.controller';


angular
  .module('app.admin', ['ui.router'])
  .controller(IncomingCtrl)
  .config(function($stateProvider) {
    $stateProvider

      .state('admin', {
        abstract: true,
        url: '/admin',
        views: {
          'main': {
            template: '<div ui-view>test</div>'
          },
          'nav': {
            templateUrl: 'src/navigation/navigation.tpl.html'
          }
        }
      })

      .state('admin.incoming', {
        url: '/incoming',
        templateUrl: 'src/admin/incoming/incoming.tpl.html',
        controller: IncomingCtrl,
        controllerAs: 'vm'
      })

      .state('admin.delivery', {
        url: '/delivery',
        templateUrl: 'src/admin/delivery/delivery.tpl.html',
        controller: DeliveryCtrl,
        controllerAs: 'vm'
      })
      ;
  });