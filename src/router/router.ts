import {createWebHashHistory,createRouter} from 'vue-router'

const Home = ()=> import ("../views/home.vue")
const Doc = ()=> import('../views/doc.vue')
const ButtonDemo = ()=>import('../views/button/index.vue')
const IconViews = () => import('../views/Icons/index.vue')


const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'/',component:Home},
    {
      path:'/doc',
      component:Doc,
      children:[
        {path:"icons",component:IconViews},
        {path:"button",component:ButtonDemo},
      ]
    }
  ]
})



export default router