import {createBrowserRouter,  RouterProvider} from 'react-router-dom';
import './app.css';
import Login_page from './pages/SignUp_page';
import SignUp_page from './pages/Login_page';
const router = createBrowserRouter(
  [
    {path: '/', element: <Login_page/>},
    {path: '/signup', element: <SignUp_page/>},
  ]
)
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
