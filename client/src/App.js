// Import hook
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Room from "./pages/Room.js";
import InitPlayer from "./components/initialization/InitPlayer.js";
import "./app.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3005");

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/homepage", element: <HomePage socket={socket} /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/room", element: <Room socket={socket} /> },
  { path: "/initplayer", element: <InitPlayer /> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
