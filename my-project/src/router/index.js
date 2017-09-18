import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/common/Home'
import Pageone from '@/components/page/pageone'
//import Pagetwo from '@/components/page/pagetwo'
import Pagethree from '@/components/page/pagethree'
import Pagefour from '@/components/page/pagefour'
import Pagefive from '@/components/page/pagefive'
import Pagesix from '@/components/page/pagesix'
import Pageseven from '@/components/page/pageseven'
import Pageeight from '@/components/page/pageeight'
import Details from '@/components/page/details'
import carousel from '@/components/page/Carousel'
//路由懒加载，异步组件
const Pagetwo = (resolve) => {
  import('@/components/page/pagetwo').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/pageone'
    },
    {
      path: '/',
      component: Hello,
      children:  [
      		{ 
      			path: '/pageone',
      		  component: Pageone,
            
 			    },
 			    { 
      			path: '/pagetwo',
      		  component: Pagetwo//resolve => require(['@/components/page/pagetwo.vue'], resolve)
 			    },
          { 
            path: '/pagethree',
              component: Pagethree
          },
          { 
              path: '/pagefour',
              component: Pagefour,
          },
          { 
            path: '/pagefive',
              component: Pagefour
          },
          { 
            path: '/pagesix',
              component: Pagefour
          },
          { 
              path: '/pageseven',
              component: Pagefour,
             
          },
          { 
            path: '/pageeight',
              component: Pagefour
          },
          { 
            path: '/details',
              component: Details
          },
          {
               path: '/Carousel',
                component: carousel
          }
      ]
    }
  ]
})
