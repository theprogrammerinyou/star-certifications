import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home} from "./pages/Home";
import { About} from "./pages/About";
import {Services} from "./pages/Services";
import { Contact} from "./pages/Contact";
import {Navbar} from "./components/Navbar";

const routes = [
    {
        id: 1,
        component: <Home />,
        path: "/",
    },
    {
        id: 2,
        component: <Home />,
        path: "/home"
    },
    {
        id:3,
        component: <Services />,
        path:"/services"
    },
    {
        id: 4,
        component: <About />,
        path: "/about"
    },
    {
        id: 5,
        component: <Contact />,
        path: "/contact"
    }
]

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              {routes.map(({id, path, component}) => (
                  <Route key={id} path={path} element={component} />
              ))}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
