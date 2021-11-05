import React from 'react';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import routes from './routes';
import NavBar from './NavBar';

const RouterView: React.FC = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        {
          routes.map((route) => {
            if (route.redirect) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Navigate replace to={route.redirect} />}
                />
              );
            }

            const { component: Component } = route;
            if (Component) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Component />}
                />
              );
            }
            return <></>;
          })
        }
      </Routes>
    </BrowserRouter>
  </>
);

export default RouterView;
