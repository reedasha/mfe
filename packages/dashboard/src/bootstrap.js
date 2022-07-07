import {createApp} from 'vue';
import Dashboard from './components/Dashboard'

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#dashboard_dev_root')
    if (devRoot) {
        mount(devRoot)
    }
}

export {mount}