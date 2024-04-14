import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './App.css'
import dogs from './data/dogs.json';
import MemberForm from './components/MemberForm.jsx'
import Navigation from './components/Navigation.jsx'
import FavoriteDog from './components/FavoriteDog.jsx'
import Gallery from './components/Gallery.jsx'
import DogsDisplay from './components/DogsDisplay.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Navigation />
        <Outlet />
      </>,
      children: [
        {
          path: '/',
          element: <FavoriteDog dogs={dogs}/>
        },
        {
          path: '/membership',
          element: <MemberForm />
        },
        {
          path: '/gallery',
          element: <Gallery dogs={dogs} />
        },
        {
          path: '/gallery/:dogId',
          element: <DogsDisplay dogs={dogs} />
        },
        {
          path: '*',
          element: <h1>Page Not Found</h1>
        }
      ]
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
