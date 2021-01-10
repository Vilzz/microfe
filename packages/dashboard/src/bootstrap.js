import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'
//Функция Mount для запуска приложения
const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el)
}
// В режиме разработки и в изоляции запускаем mount сразу

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// При запуске из основного контейнера мы должны экспортировать функцию mount

export { mount }
