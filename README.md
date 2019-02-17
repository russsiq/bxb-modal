# bxb-modal
Vue.js component [modal window] from [BixBite](https://github.com/russsiq/bixbite).

### Installation

Download library or can be installed as `npm` package:
```console
npm i bxb-modal --save-dev
```

### Getting started

To start using `bxb-modal`, you need to do is plugin installation. Somewhere in your main app.js file:
```js
<template>
<div class="">
    <button type="button" class="btn btn-sm btn-outline-secondary" @click.prevent="openModal()">Open modal</button>
    
    <modal v-if="modalShown" @close="closeModal()">
        <template slot="modal__header">It is a modal header.</template>

        <template slot="modal__body">
            <p>It is a modal body.</p>
            <input type="text"
                v-model="loremIpsumData"
                @keydown.13.prevent="updateData()"
                class="form-control"
                placeholder="Add new data ..."
                autocomplete="off"
                required />
        </template>

        <template slot="modal__footer">
            <button type="button" class="btn btn-outline-secondary mr-2" @click="closeModal()">Cancel</button>
            <button type="button" class="btn btn-outline-success" @click="updateData()">Apply</button>
        </template>
    </modal>
</div>
</template>

<script type="text/ecmascript-6">
import Modal from 'bxb-modal'

export default {
    components: {
        'modal': Modal,
    },

    data() {
        return {
            modalShown: false,
            loremIpsumData: null,
        };
    },

    methods: {
        openModal() {
            this.modalShown = true
        },

        closeModal() {
            this.modalShown = false
        },

        updateData() {
            alert('It is new data: ' + this.loremIpsumData + '?')
            this.closeModal()
        },
        // Another code of your app.
    }
</script>
```

### Лицензия

bxb-modal - программное обеспечение с открытым исходным кодом, распространяющееся по лицензии [MIT license](https://choosealicense.com/licenses/mit/).
