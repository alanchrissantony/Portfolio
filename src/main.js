import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';
import Icon_Send from 'vue-material-design-icons/Send.vue';


Vue.component('Icon_Send', Icon_Send);


// no tips
Vue.config.productionTip = false;

// Analytics
Vue.use(VueAnalytics, {
    id: 'UA-75833214-1',
    router
});

// service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/alan_chr.is-sw.js').then(registration => {
            //console.log('SW registered: ', registration);
        }).catch(registrationError => {
            //console.log('SW registration failed: ', registrationError);
        });
    });
}

// instance
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
