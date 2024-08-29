import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import DetalhesTenis from './pages/DetalhesTenis';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div style={{display: 'flex', justifyContent: 'center', }}>
                    <h1>Not Found!</h1>
                  </div>
  },
  {
    path: "/Detalhes",
    element: <DetalhesTenis />
  },
  {
    path: "/1",
    element:<div>
              <h2>Teste</h2>
              <h2>Teste2</h2>
            </div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
