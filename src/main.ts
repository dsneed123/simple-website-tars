import { renderApp } from './app'

const root = document.getElementById('app')
if (!root) throw new Error('Root element #app not found')

renderApp(root)
