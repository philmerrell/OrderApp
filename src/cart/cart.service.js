import _ from 'lodash';

class CartService {

  constructor($mdDialog, $mdMedia, $mdToast, $state, $timeout) {
    this.$mdDialog = $mdDialog;
    this.$mdMedia = $mdMedia;
    this.$mdToast = $mdToast;
    this.$timeout = $timeout;
    this.$state = $state;
    this.cart = [];
    this.order = {};
    this.total = 0;

    this.firebasePath = null;
  }

  getOrderTotal() {
    var total = 0;
    _.forEach(this.cart, item => {
      total += item.Price;
    });

    return total.toFixed(2);
  }

  getFirebasePath() {
    return this.firebasePath;
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
    var position = this.$mdMedia('sm') ? 'bottom' : 'top right';
    return this.$mdToast.show({
      templateUrl: 'src/core/toast-total.tpl.html',
      controller: 'ToastTotalCtrl as vm',
      hideDelay: 0,
      position: position
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

  completeOrder() {
    this.order = {
      user: {
        first: 'Phil',
        last: 'Merrell',
        payment: 'Paypal'
      },
      cart: angular.copy(this.getCart()),
      timeSubmitted: Firebase.ServerValue.TIMESTAMP,
      total: this.getOrderTotal(),
      deliveryAddress: '4613 Kendall St Boise, Id 83706',
      orderStatus: 'Order submitted',
      progress: 'Ordered'
    };
    var ref = new Firebase("https://philmerrell.firebaseio.com/orders/");
    var id = ref.push(this.order);
    this.firebasePath = id.path.n[1];
  }

}

export default CartService