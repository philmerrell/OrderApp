class AdminCtrl {
  constructor($firebaseArray) {

    this.$firebaseArray = $firebaseArray;
    this.orders = [];

    this.getIncomingOrders();

  }

  getIncomingOrders() {
    var ref = new Firebase("https://philmerrell.firebaseio.com/orders/");
    this.orders = this.$firebaseArray(ref.orderByChild("progress").equalTo("Ordered"));
    return this.orders;
  }

  acknowledgeOrder(order) {
    order.orderStatus = 'Acknowledged';
    this.orders.$save(order);
  }

  readyForDelivery(order) {
    order.orderStatus = 'Ready For Delivery';
    order.progress = 'Made';
    this.orders.$save(order);
  }

  enroute(order) {
    order.orderStatus = 'Order Enroute';
    order.progress = 'Delivering';
    this.orders.$save(order);
  }
}

export default AdminCtrl