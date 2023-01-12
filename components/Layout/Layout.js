import { Children } from "react"
import Navbar from "../Navbar/Navbar"
import SideBar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";
export default function Layout({children}) {
  return (
    <div className={styles.layoutContainer}>
        <div className={styles.Navbar}>
          <Navbar/>
        </div>
        <div className={styles.Main}>
            <div className={styles.SideBar}>
              <SideBar/>
            </div>
            <div className={styles.Children}>
              {children}
            </div>
        </div>
    </div>
  )
}
