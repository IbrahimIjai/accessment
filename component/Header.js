import React from 'react';
import styles from "./styles/Header.module.css";
import useMediaQuery from "./hooks/useMediaQueryhooks";

const Header = ({handleOpen, open}) => {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    
    <div className={styles.container}>
        {isDesktop ? <div>{open && "yoo open is working"}
        <button onClick={handleOpen}>open</button></div>: <div><button>openMobileMenu</button></div>}
        <span>Home</span>
        <span>About</span>
        <span>Launchpad</span>
    </div>
  )
}

export default Header