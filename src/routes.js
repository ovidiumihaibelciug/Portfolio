import Home from './containers/views/Home';
import About from './containers/views/About';
import Skills from './containers/views/Skills';
import Experience from './containers/views/Experience';

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
        path: '/experience',
        component: Experience
    },
    {
        path: '/',
        component: Home
    }
];