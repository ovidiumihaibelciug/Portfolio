import Home from './containers/views/Home';
import About from './containers/views/About';
import Skills from './containers/views/Skills';

export const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/skills',
        component: Skills
    },
    {
        path: '/',
        component: Home
    }
];