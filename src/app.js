import AppCtrl from './app.controller';
import UserService from './services/user.service';

import './core/core.module';
import './menus/menu.module';
import './cart/cart.module';
import './admin/admin.module';
import './track-order/track-order.module';



angular
  .module('app', ['app.core', 'app.menus', 'app.cart', 'app.admin', 'app.trackOrder'])
  .controller('AppCtrl', AppCtrl)
  .service('UserService', UserService)
  .config(function() {});