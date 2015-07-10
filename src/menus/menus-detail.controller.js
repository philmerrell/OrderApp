class MenusDetailCtrl {
  constructor($state, CartService, MenuService) {
    this.cartService = CartService;
    this.menuService = MenuService;

    this.menu = [];
    this.$state = $state;

    this.getMenu();
  }

  addToCart (event, sandwich) {
    this.cartService.addToCart(event, sandwich);
  }

  getMenu () {
    return this.menuService.getMenu().then(results => {
      this.menu = results.data;
      return this.menu;
    });
  }
}

export default MenusDetailCtrl