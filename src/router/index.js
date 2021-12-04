import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const DefaultContainer = () => import('@/components/DefaultContainer.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: DefaultContainer,
    redirect: 'jmedina/home',
    children: [
      {
        path: 'jmedina',
        redirect: 'jmedina/Home',
        name: 'Base',
        component: {
          render(c) {
            return c('router-view');
          },
        },
        children: [
          {
            path: '/',
            name: 'start',
            component: {
              render(c) {
                return c('router-view');
              },
            },
            children: [
              {
                path: 'home',
                name: 'Home',
                component: Home,
              },
            ]
          },
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
