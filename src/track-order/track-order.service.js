class TrackOrderService {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;

    this.elapsed = 0;
  }

  add() {
    console.log(this);
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }

    this.elapsed = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);

    this.timer();
  }

  timer() {
    this.$timeout(this.add, 1000);
  }

  startTimer() {
    this.timer();
  }

  getElapsed() {
    return this.elapsed;
  }

}

export default TrackOrderService