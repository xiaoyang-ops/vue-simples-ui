import * as components from './components'

const SimpleUi = {
    install(Vue) {
        Object.keys(components).forEach(name => {
            Vue.component(name, components[name])
        })
    }
}

// 支持按需引入
export * from './components'

// 支持全局引入
export default SimpleUi
