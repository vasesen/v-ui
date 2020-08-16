import {createWebHashHistory,createRouter} from 'vue-router'

const Home = ()=> import ("../views/home.vue")
const Doc = ()=> import('../views/doc.vue')
const ButtonDoc = ()=>import('../views/button/buttonDoc.vue')
const IconDoc = () => import('../views/icons/iconDoc.vue')
const SwitchDoc = ()=>import('../views/switch/switchDoc.vue')

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'/',component:Home},
    {
      path:'/doc',
      component:Doc,
      children:[
        {path:"icons",component:IconDoc},
        {path:"button",component:ButtonDoc},
        {path:"switch",component:SwitchDoc},
      ]
    }
  ]
})



export default router