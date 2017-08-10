import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/common/Home'
import Pageone from '@/components/page/pageone'
import Pagetwo from '@/components/page/pagetwo'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/pagetwo'
    },
    {
      path: '/',
      component: Hello,
      children:  [
      		{ 
      			path: '/pageone',
      		    component: Pageone
 			},
 			{ 
      			path: '/pagetwo',
      		    component: Pagetwo
 			}
      ]
    }
  ]
})
