import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Body from './Body';
import styles from "./styles/Layout.module.css";
import styled from "styled-components";
import useMediaQuery from "./hooks/useMediaQueryhooks";
import MobileMenu from './MobileMenu';


const HeadCont = styled.div`
    position: fixed;
    width: 100%;
`;
const Childs = styled.div`
    margin-top:10vh;
    width: ${({ isOpen }) => (isOpen ? `80%` : `100%`)};
    margin-left:${({ isOpen }) => (isOpen ? `20vw` : `3vw`)};
    transition: all 1.1s
`;

const Sidie = styled.div`
   position: fixed;
   top: 8vh;
   width: ${({ isOpen }) => (isOpen ? `20%` : `4%`)};
   transition: all 1.1s
`;


const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [MobileM, setMobileMenu] = useState(false);

  const handleMM = () => {
    setMobileMenu(!MobileM)
  }
  const handleOpen = ()=>{
    setOpen(!open)
  }

  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (

    <div className={styles.container}>
        <HeadCont><Header handleMM={handleMM} handleOpen={handleOpen} open={open}/></HeadCont>
        <div className={styles.Schildren}>
          
        {isDesktop && <Sidie isOpen={open}><Sidebar open={open}/></Sidie> }
         {MobileM &&<MobileMenu /> }
          <Childs isOpen={open} className={styles.children}>
            {children}
            <Footer/>
          </Childs>
        </div>
    </div>
  )
}

export default Layout;