'use strict';

import 'angular-material';
import 'angular-ui-router';
import 'firebase';
import 'angularfire';
import ToastTotalCtrl from '../core/toast-total.controller';


var core = angular
  .module('app.core', [
    /* Angular Modules */
    'ngMaterial',

    /* Third Party */
    'ui.router',
    'firebase'
  ])
  .controller('ToastTotalCtrl', ToastTotalCtrl);