require('./bootstrap');
window.Vue = require('vue');

const app = new Vue({
    render: h => h(require('./components/FullCalendar.vue').default)
}).$mount('#app');
