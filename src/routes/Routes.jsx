import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home/Home';
import Home2 from '../pages/home-2/Home-2/Home2';
import ErrorPage from '../pages/errorPage/ErrorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [

      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home02',
        element: <Home2 />,
      },

    ],
  },
]);

export default routes;
