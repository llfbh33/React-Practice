import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import MemberForm from './components/MemberForm.jsx'


const router = createBrowserRouter([
  {
    path: '/member-form',
    element: <MemberForm />
  }
])


function App() {
  return (
    <>
        <h1>Welcome to Aubrie's Website!</h1>
        <RouterProvider router={router} />
    </>
  )
}

export default App
