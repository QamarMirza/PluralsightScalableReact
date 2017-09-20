/**
*
* Drawer
*
*/

import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
      id={item.name}
    >
      {item[itemLabelAttr]}
    </div>
  ));
  return (
    <div className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })} >
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
};

export default Drawer;
