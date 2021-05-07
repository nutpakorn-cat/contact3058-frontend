import { createRouter, createWebHistory } from 'vue-router';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import AddContactScreen from './screens/AddContactScreen';
import UpdateContactScreen from './screens/UpdateContactScreen';

const routes = [
    {
        path: '/',
        name: 'Home Screen',
        component: HomeScreen
    },
    {
        path: '/login',
        name: 'Login Screen',
        component: LoginScreen
    },
    {
        path: '/contact/',
        name: 'Contact Screen',
        component: ContactScreen
    },
    {
        path: '/add-contact/',
        name: 'Add Contact Screen',
        component: AddContactScreen
    },
    {
        path: '/update-contact/:id',
        name: 'Update Contact Screen',
        component: UpdateContactScreen
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;