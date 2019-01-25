// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import reset from 'reset-css'
import axios from 'axios'
// import agent from './assets/js/vendor/detect'
import VueAnalytics from 'vue-analytics'
import viewport from './assets/js/vendor/viewport'
import detect from './assets/js/vendor/detect'
/*import router from './router'*/


let easings = {
  'ease': [0.25, 0.1, 0.25, 1.0],
  'linear': [0.00, 0.0, 1.00, 1.0],
  'ease-in': [0.42, 0.0, 1.00, 1.0],
  'ease-out': [0.00, 0.0, 0.58, 1.0],
  'ease-in-out': [0.42, 0.0, 0.58, 1.0],
  'ease-in-out-quad': [0.455, 0.030, 0.515, 0.955],
  'ease-in-out-cubic': [0.645, 0.045, 0.355, 1],
};
// let isApple = agent.Device.apple;
let _Device = detect._Device;
window.detectDevice = _Device;
//window.TrackingCode = globarVars.TrackingCode;


require('es6-promise').polyfill();
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$eventHub = new Vue(); // Global event bus
let VueScrollTo = require('vue-scrollto');

// 폴리필 추가
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    enumerable: false,
    value: function(obj) {
      var newArr = this.filter(function(el) {
        return el == obj;
      });
      return newArr.length > 0;
    }
  });
}


Vue.use(VueAnalytics, {
  id: 'UA-73264580-1'
});


// You can also pass in the default options
Vue.use(VueScrollTo, {
  easing: easings["ease-in-out-cubic"],
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*router,*/
  components: { App },
  template: '<App/>',
});
