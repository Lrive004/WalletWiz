import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
// import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <Home/>,
      },
      // {
      //   path: '/login',
      //   element: <Login />
      // },
      // {
      //   path: '/signup',
      //   element: <Signup />
      // },
      // {
      //   path: '/profiles/:profileId',
      //   element: <Profile />
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
