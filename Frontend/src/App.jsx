// Import hook
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Setting from './components/dock/SettingModal.jsx';
import './App.css';
const router = createBrowserRouter(
  [
    {path: '/', element: <Login/>},
    {path: '/homepage', element: <HomePage/>},
    {path: '/signup', element: <SignUp/>},
    {path: '/setting', element: <Setting/>},
  ]
)
function App() {
  return (
    <main>
      <RouterProvider router={router} />;
    </main>
  )
}

export default App
