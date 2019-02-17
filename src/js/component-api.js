import Vue from 'vue'
import Component from './component.vue'

export default {
    show(params = {}) {
        let Modal = Vue.extend(Component),
            element = document.createElement('div'),
            propsData = Object.assign({
                active: true
            }, params)

        return new Modal({
            el: element,
            propsData: propsData
        })
    }
}
