import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/book-store'
    },
    {
      path: '/book-store',
      component: resolve => require(['@/views/store/index.vue'],resolve),
      redirect: '/book-store/shelf',
      children: [
        {
          path: '/book-store/shelf',
          component: resolve => require(['@/views/store/bookShelf.vue'],resolve),
          meta: { key: 1 }
        }
        
      ]
    }
  ]
})
