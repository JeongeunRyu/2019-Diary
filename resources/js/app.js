import Vue          from    'vue'
import Vuetify      from    'vuetify'
import router       from    './routes'
import App          from    './App.vue'
import VueCharts    from    'vue-chartjs'
import 'vuetify/dist/vuetify.min.css'

Vue.use( Vuetify,  VueCharts )

const app = new Vue({
    router,
    render:h =>h(App)
}).$mount('#app')

export default app;