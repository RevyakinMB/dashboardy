import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <div>
    <Link to="/path1">
      Component 1
    </Link>
    &nbsp;|&nbsp;
    <Link to="/path2">
      Component 2
    </Link>
  </div>
);

export default NavBar;
