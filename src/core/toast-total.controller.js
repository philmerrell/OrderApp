class ToastTotalCtrl {

  constructor($mdDialog, $state, $timeout, CartService) {
    var vm = this;

    vm.$mdDialog = $mdDialog;
    vm.$state = $state;
    this.processingOrder = false;
    this.$timeout = $timeout;
    this.cartService = CartService;
    this.total = 0;

    this.getTotal();
  }

  go (state){
    console.log(state);
    this.$state.go(state);
  }

  pay(ev) {

    this.processingOrder = true;
    this.$mdDialog.show({
      templateUrl: 'src/cart/process-payment.tpl.html',
      parent: angular.element(document.body),
      targetEvent: ev
    });
    this.$timeout(() => {
      this.processingOrder = false;
      this.$mdDialog.hide();
    }, 3000);
  }

  getTotal() {
    this.total = this.cartService.getOrderTotal();
    return this.total;
  }
}

export default ToastTotalCtrl