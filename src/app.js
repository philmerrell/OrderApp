import AppCtrl from './app.controller';
import UserService from './services/user.service';

import './cart/cart.module';
import './core/core.module';
import './menus/menu.module';


angular
  .module('app', ['app.core', 'app.menus', 'app.cart'])
  .controller('AppCtrl', AppCtrl)
  .service('UserService', UserService)
  .config(function() {});