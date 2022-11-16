import * as components from './components';
import { App } from 'vue'
import type { Component } from 'vue'

const componentsList: Component = components?.default;
const Vue3btn = {
    install(app: App) {
        Object.keys(componentsList).forEach(name => {
            app.component(name, componentsList[name]);
        })
    },
};
export default Vue3btn;

