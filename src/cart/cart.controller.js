import _ from 'lodash';

class CartCtrl {
  constructor(CartService) {
    var vm = this;

    this.cartService = CartService;
    this.cart = [];
    vm.address = ['4615 Kendall St. Boise ID 83706'];

    this.getCartItems();
  }

  getCartItems() {
    this.cart = this.cartService.getCart();
    return this.cart;
  }

  removeItem(item) {

    this.cartService.removeFromCart(item);
  }


}

export default CartCtrl