class MenuService {

  constructor($http) {
    this.$http = $http;
  }

  getMenu() {
    return this.$http.get('assets/json/example-menu.json');
  }
}

export default MenuService