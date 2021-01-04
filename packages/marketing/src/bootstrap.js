import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
//Функция Mount для запуска приложения
const mount = (el) => {
  ReactDom.render(<App />, el)
}
// В режиме разработки и в изоляции запускаем mount сразу

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// При запуске из основного контейнера мы должны экспортировать функцию mount

export { mount }
