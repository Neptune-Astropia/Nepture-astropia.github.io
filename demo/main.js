import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'

import Installation from './components/Installation.vue'
import BasicUsage from './components/BasicUsage.vue'
import Props from './components/Props.vue'
import Events from './components/Events.vue'
import Styling from './components/Styling.vue'
import Hair from './components/hair.vue'
import LowPolyTs from './components/low-poly-ts.vue'

import '../demo/main.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


Vue.use(VueRouter)
Vue.use(VueSidebarMenu)

const router = new VueRouter({
routes: [
{
  path: '/',
  name: 'Installation',
  component: Installation
},
{
  path: '/basic-usage',
  name: 'BasicUsage',
  component: BasicUsage
},
{
  path: '/props',
  name: 'Props',
  component: Props
},
{
  path: '/events',
  name: 'Events',
  component: Events
},
{
  path: '/styling',
  name: 'Styling',
  component: Styling
},
{
  path: '/hair',
  name: 'Hair',
  component: Hair
},
{
  path: '/low-poly-ts',
  name: 'LowPolyTs',
  component: LowPolyTs
},
]
})

new Vue({ // eslint-disable-line no-new
el: '#app',
router,
render: h => h(App)
})
