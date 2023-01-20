import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Home></Home>
    }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
