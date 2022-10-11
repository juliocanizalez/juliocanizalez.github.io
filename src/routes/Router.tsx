import { createBrowserRouter } from 'react-router-dom';

import Profile from '../pages/profile';
import Contact from '../pages/contact';
import Projects from '../pages/projects';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/404';
import routes from './routes.definition.json';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: routes.home,
        element: <Profile />,
      },
      {
        path: routes.contact,
        element: <Contact />,
      },
      {
        path: routes.projects,
        element: <Projects />,
      },
    ],
  },
]);
