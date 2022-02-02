import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import Checksheet from '../views/checksheets/Checksheet01.vue'
import ChecksheetList from '../views/checksheets/ChecksheetList.vue'
import TasksAll from '../views/tasks/TasksAll.vue'
import TasksCreate from '../views/tasks/TasksCreate.vue'
import TasksEdit from '../views/tasks/TasksEdit.vue'



Vue.use(VueRouter)



export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/checksheets',
      name: 'checksheet01',
      component: Checksheet
    },
    {
      path: '/checksheetlist',
      name: 'checksheetlist',
      component: ChecksheetList
    },
    {
      path:'/tasks',
      name: 'tasks-all',
      component: TasksAll
    },
    {
      path:'/tasks/new',
      name: 'tasks-create',
      component: TasksCreate
    },
    {
      path:'/tasks/:id',
      name: 'tasks-edit',
      component: TasksEdit
    },
    {
      path:'/register',
      name: 'register',
      component: Register
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    },

  ],
  linkActiveClass: 'active',
  mode: 'history'
})

