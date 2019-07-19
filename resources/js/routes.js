import Vue          from 'vue'
import VueRouter    from 'vue-router'
import Home         from './components/Home'
import Write        from './components/Write'
import View         from './components/View'
import Show         from './components/Show'
import Edit         from './components/Edit'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'write',
            path: '/write',
            component: Write
        },
        {
            name: 'view',
            path: '/view',
            component: View,
        },
        {
            name: 'show',
            path: '/show/:id',
            component: Show
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: Edit
        },
      ]
})

export default router