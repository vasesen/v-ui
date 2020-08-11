import {createWebHashHistory,createRouter} from 'vue-router'

const Home = ()=> import ("../views/home.vue")
const Doc = ()=> import('../views/doc.vue')

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'/',component:Home},
    {path:'/doc',component:Doc}
  ]
})



export default router