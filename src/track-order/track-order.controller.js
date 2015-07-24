class TrackOrderCtrl {
  constructor($firebaseObject, $stateParams, $timeout) {
    this.$timeout = $timeout;
    this.$stateParams = $stateParams;
    this.$firebaseObject = $firebaseObject;

    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.elapsedTime = 0;
    this.order = null;

    this.timer();
    this.loadOrder();

  }

  addTime() {
    this.seconds = this.seconds + 1;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }

    this.elapsedTime = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);

    this.timer();
  }

  timer() {
    this.$timeout(this.addTime.bind(this), 1000);
  }

  loadOrder() {
    var ref = new Firebase("https://philmerrell.firebaseio.com/orders/"+this.$stateParams.id);
    this.order = this.$firebaseObject(ref);

    console.log(this.order);
  }
}

export default TrackOrderCtrl