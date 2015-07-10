import MenusCtrl from './menu.controller';
import MenusDetailCtrl from './menus-detail.controller';
import MenuService from './menu.service';
import ItemDetailCtrl from './item-detail.controller';
import 'angular-ui-router';


angular
  .module('app.menus', ['ui.router'])
  .config(MenuConfig)
  .service('MenuService', MenuService);

function MenuConfig($stateProvider) {
  $stateProvider

    .state('menus', {
      abstract: true,
      url: '/menu',
      views: {
        'main': {
          template: '<div ui-view>test</div>'
        },
        'nav': {
          templateUrl: 'src/navigation/navigation.tpl.html'
        }
      }
    })

    .state('menus.list', {
      url: '',
      templateUrl: 'src/menus/menus.tpl.html',
      controller: MenusCtrl,
      controllerAs: 'vm'
    })

    .state('menus.detail', {
      url: '/:id',
      templateUrl: 'src/menus/menus-detail.tpl.html',
      controller: MenusDetailCtrl,
      controllerAs: 'vm'
    })

    .state('item', {
      url: '/item/:Path',
      views: {
        'main': {
          templateUrl: 'src/menus/item-detail.tpl.html',
          controller: ItemDetailCtrl,
          controllerAs: 'vm'
        },
        'nav': {
          templateUrl: 'src/navigation/navigation.tpl.html'
        }
      }
    })
  ;
}