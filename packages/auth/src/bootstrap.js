import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'
//Функция Mount для запуска приложения
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })
  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDom.render(<App history={history} onSignIn={onSignIn} />, el)
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    },
  }
}
// В режиме разработки и в изоляции запускаем mount сразу

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

// При запуске из основного контейнера мы должны экспортировать функцию mount

export { mount }
