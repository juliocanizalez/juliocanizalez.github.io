import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound: React.FC = () => {
  const error: any = useRouteError();

  return (
    <>
      <div>NotFound</div>
      <p>{error.statusText || error.message}</p>
    </>
  );
};

export default NotFound;
