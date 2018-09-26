import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

// You can modify generated routes to add a redirect route.
routes.push({
  path: '/*',
  redirect: '/'
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})
