import React from 'react';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import routes from './routes';
import NavBar from './NavBar';
import styles from './RouterView.module.scss';

const RouterView: React.FC = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <div className={styles.routerViewContainer}>
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
      </div>
    </BrowserRouter>
  </>
);

export default RouterView;
