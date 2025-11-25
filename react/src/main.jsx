import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/", // 어떠한 url 경로로 접속했을 때
    element: <App />, //해당 컴포넌트를 보여줘
    children: [
      {
        path: "", // 어떠한 url 경로로 접속했을 때
        element: <Home /> //해당 컴포넌트를 보여줘
      },
      {
        path: "about", // 어떠한 url 경로로 접속했을 때
        element: <About /> //해당 컴포넌트를 보여줘
      },
      {
        path: "contact", // 어떠한 url 경로로 접속했을 때
        element: <Contact /> //해당 컴포넌트를 보여줘
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
  </>
)
