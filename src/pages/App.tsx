import React from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider, Route } from 'react-router-dom';

import { router } from '../routes/Router';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
