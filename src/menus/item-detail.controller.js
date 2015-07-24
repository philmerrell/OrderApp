import _ from 'lodash';

class ItemDetailCtrl {
  constructor($state, $stateParams, CartService, MenuService) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.cartService = CartService;
    this.menuService = MenuService;
    this.menu = [];
    this.item = {};
    this.customize = false;

    this.getMenu().then(menu => {
      this.item = _.find(menu, { Path: $stateParams.Path });
      return this.item;
    });

  }

  addToCart (event, items) {
    this.cartService.addToCart(event, items);
  }

  getMenu () {
    return this.menuService.getMenu().then(results => {
      this.menu = results.data;
      return this.menu;
    });
  }
}

export default ItemDetailCtrl