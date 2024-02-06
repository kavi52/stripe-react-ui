import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Pay from './pages/Pay';
import Success from './pages/Success';
import Square from './pages/Square';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: '/pay',
      element: <Pay />
    },
    {
      path: '/success',
      element: <Success />
    },
    {
      path: '/square',
      element: <Square />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
