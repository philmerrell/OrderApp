class DeliveryCtrl {
  constructor($firebaseArray) {

    this.$firebaseArray = $firebaseArray;
    this.orders = [];

    this.getIncomingOrders();

  }

  getIncomingOrders() {
    var ref = new Firebase("https://philmerrell.firebaseio.com/orders/");
    this.orders = this.$firebaseArray(ref.orderByChild("progress").equalTo("Made"));
    return this.orders;
  }

  enroute(order) {
    order.orderStatus = 'Order Enroute';
    order.progress = 'Delivering';
    this.orders.$save(order);

  }
}

export default DeliveryCtrl