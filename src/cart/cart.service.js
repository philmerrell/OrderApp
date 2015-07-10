import _ from 'lodash';

class CartService {

  constructor($mdDialog, $mdToast, $state, $timeout) {
    this.$mdDialog = $mdDialog;
    this.$mdToast = $mdToast;
    this.$timeout = $timeout;
    this.$state = $state;
    this.cart = [];
    this.total = 0;
  }

  getOrderTotal() {
    var total = 0;
    _.forEach(this.cart, item => {
      total += item.Price;
    });

    return total;
  }

  addToCart(ev, items) {
    this.cart.push(items);
    this.showOrderAddedDialog(ev);
  }

  removeFromCart(item) {
    _.pull(this.cart, item);
  }

  getCart() {
    return this.cart;
  }

  showTotalToast() {
    return this.$mdToast.show({
      templateUrl: 'src/core/toast-total.tpl.html',
      controller: 'ToastTotalCtrl as vm',
      hideDelay: 0,
      position: 'bottom'
    });
  }

  showOrderAddedDialog(ev) {
    var confirm = this.$mdDialog.confirm()
      .parent(angular.element(document.body))
      .title('Order Added!')
      .content('Would you like to order more or checkout?')
      .ariaLabel('Order added')
      .ok('Checkout')
      .cancel('Order more')
      .targetEvent(ev);

    this.$mdDialog.show(confirm).then(() => {
      this.$state.go('cart');
      this.showTotalToast();
    }, () => {
      this.$state.go('menus.detail');
      this.showTotalToast();

    });
  }

}

export default CartService