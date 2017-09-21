/**
*
* AppBar
*
*/

import React from 'react';
import { Link } from 'react-router';
import IconButton from '../IconButton';
import styles from './styles.css';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login" > Login </Link>);
  return (
    <div className={styles.appBar}>
      <IconButton
        buttonClass={styles.iconButton}
        icon="bars"
        iconClass={styles.icon}
        onClick={toggleDrawer}
      />
      <div
        className={styles.heading}
      >
        Coder Daily
      </div>
      <div
        className={styles.linkContainer}
      >
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;
