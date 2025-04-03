import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'

const router=createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    Children:[
      {
        path:'/',
       element:<Home/>,
      },
      {
        path:"Login",
        element:(
          <AuthLayout authentication={false}>
            <Login/>
            </AuthLayout>
        )
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
