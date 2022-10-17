import React from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
// @ts-ignore
import { Helmet } from 'react-helmet';

import { router } from '../routes/Router';
import { favicon } from '../services/utils';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Julio | Software Engineer</title>
        <link
          rel='icon'
          href={favicon}
          type='image/png'
        />
      </Helmet>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
