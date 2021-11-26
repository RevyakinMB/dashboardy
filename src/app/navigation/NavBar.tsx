import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';
import classnames from 'classnames';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const [toggled, setToggled] = useState(false);
  const toggleMenu = () => setToggled(!toggled);
  const menuClassNames = classnames(styles.appMenu, {
    [styles.open]: toggled,
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
        </div>
        <div className={menuClassNames}>
          <ul>
            <li>
              <Link to="/path1">
                Component 1
              </Link>
            </li>
            <li>
              <Link to="/path2">
                Component 2
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
