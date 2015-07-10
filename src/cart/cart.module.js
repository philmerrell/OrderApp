import CartService from './cart.service';
import CartCtrl from './cart.controller';


angular
  .module('app.cart', ['ui.router'])
  .service('CartService', CartService)
  .config(function($stateProvider) {
    $stateProvider
      .state('cart', {
        url: '/cart',
        views: {
          'main': {
            templateUrl: 'src/cart/cart.tpl.html',
            controller: CartCtrl,
            controllerAs: 'vm'
          },
          'nav': {
            templateUrl: 'src/navigation/navigation.tpl.html'
          }
        }
      });
  });