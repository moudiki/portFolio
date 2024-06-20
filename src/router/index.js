import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import aboutMe from '../components/aboutMe.vue'
import myWorks from '../components/myWorks.vue'
import myProjects from '../components/myProjects.vue'
import contactsMe from '../components/contactsMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/aboutMe',
      name: 'about',
      component: aboutMe
    },
    {
      path: '/myWorks',
      name: 'works',
      component: myWorks
    },
    {
      path: '/myProjects',
      name: 'projects',
      component: myProjects
    },
    {
      path: '/contactsMe',
      name: 'contacts',
      component: contactsMe
    },
   
   
   
   
   
  ]
})

export default router
