import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddUser from '../components/Users/AddUser'
import EditUser from '../components/Users/EditUser'
import ShowDetails from '../components/Users/ShowDetails'
import Users from '../components/Users/Users'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/add_user',
        name: 'AddUser',
        component: AddUser
    }, {
        path: '/edit_user/:user_id',
        name: 'EditUser',
        component: EditUser
    }, {
        path: '/users',
        name: 'Users',
        component: Users
    }, {
        path: '/show_details/:user_id',
        name: 'ShowDetails',
        component: ShowDetails
    }]
})