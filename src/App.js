  // Import hook
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  import HomePage from './pages/Home.js';
  import Login from './pages/Login.js';
  import SignUp from './pages/SignUp.js';
  import Room from './pages/Room.js';

  import './app.css';
  const router = createBrowserRouter(
    [
      {path: '/', element: <Login/>},
      {path: '/homepage', element: <HomePage/>},
      {path: '/signup', element: <SignUp/>},
      {path: '/room', element: <Room/>}, 
    ]
  )
  function App() {
    return (
      <main>
        <RouterProvider router={router} />
      </main>
    )
  }

  export default App
