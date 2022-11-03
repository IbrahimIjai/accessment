import React from 'react';
import styles from "./styles/Sidebar.module.css";

const Sidebar = ({open}) => {
  return (
    <div className={styles.container}>
        { open &&<span>Home</span>}
        <span>About</span>
        <span>Launchpad</span>
    </div>
  );
}

export default Sidebar