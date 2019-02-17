import Component from './js/component.vue'
import ComponentApi from './js/component-api.js'

Component.install = function (Vue, options) {
    Vue.prototype.$modal = ComponentApi;
}

export default Component
