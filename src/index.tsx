import React from 'react'
import ReactDom from 'react-dom/client'

import 'normalize.css'
import './assets/styles/global.css'
import App from './App'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4fc08d',
          colorLink: '#4fc08d'
        }
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
)
