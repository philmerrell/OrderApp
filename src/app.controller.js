class AppCtrl {

  constructor($firebaseAuth, $mdSidenav, $mdToast, $scope, $state, UserService) {
    this.currentUser = UserService.getCurrentUser();
    this.$firebaseAuth = $firebaseAuth;
    this.$mdSidenav = $mdSidenav;
    this.$mdToast = $mdToast;
    this.$scope = $scope;
    this.$state = $state;

  }

  addToCart () {

  }

  googleLogin () {
    var ref = new Firebase("https://philmerrell.firebaseio.com");
    var auth = this.$firebaseAuth(ref);

    auth.$authWithOAuthPopup("google")
      .then((authData) => {
        this.currentUser = authData;
      })
      .catch((error) => {
        console.log('Authentication failed: ', error);
      }
    );

  }

  go (state){
    console.log(state);
    this.$state.go(state);
  }

  toggleSideMenu() {
    this.$mdSidenav('left').toggle();

  }

}

export default AppCtrl