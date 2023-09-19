import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home/Home';
import Home2 from '../pages/home-2/Home-2/Home2';
import ErrorPage from '../pages/errorPage/ErrorPage';
import About from '../pages/about/About';
import Services from '../pages/services/Services';
import Projects from '../pages/projects/Projects';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';

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
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services/>,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },

    ],
  },
]);

export default routes;
