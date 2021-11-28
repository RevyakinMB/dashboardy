import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';
import classnames from 'classnames';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const [toggled, setToggled] = useState(false);
  const toggleMenu = () => setToggled(!toggled);

  const menuClassnames = classnames(styles.appMenu, {
    [styles.open]: toggled,
  });

  const location = useLocation();
  const getLinkClassname = (path: string) => classnames({
    [styles.current]: location.pathname === path,
  });

  return (
    <div>
      <div className={styles.appHeader}>
        <div className={styles.appHeaderContent}>
          <Button
            icon
            onClick={toggleMenu}
          >
            <Icon
              inverted={toggled}
              name="bars"
            />
          </Button>
          <span className={styles.headerBranding}>
            {'{companyName}'}
          </span>
        </div>
        <div className={menuClassnames}>
          <ul>
            <li className={getLinkClassname('/path1')}>
              <Link to="/path1">
                Route 1
              </Link>
            </li>
            <li className={getLinkClassname('/path2')}>
              <Link to="/path2">
                Route 2
              </Link>
            </li>
            <li><Link to="/path2">Dummy Route 1</Link></li>
            <li><Link to="/path2">Dummy Route 2</Link></li>
            <li><Link to="/path2">Dummy Route 3</Link></li>
            <li><Link to="/path2">Dummy Route 4</Link></li>
            <li><Link to="/path2">Dummy Route 5</Link></li>
            <li><Link to="/path2">Dummy Route 6</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
