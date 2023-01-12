import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import styles from "./Sidebar.module.css";
// FaUsers
{/* <Image src="/lendsqr.png" width={100} height={30} alt="logo"/> */}
export default function SideBar() {
    const customersNav = [
        {
            id: 1,
            navTitle: "User",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 2,
            navTitle: "Guarantor",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 3,
            navTitle: "Loan",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 4,
            navTitle: "Decision Model",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 5,
            navTitle: "Savings",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 6,
            navTitle: "Loan Request",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 7,
            navTitle: "Whitelist",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 8,
            navTitle: "Karma",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
    ]
    const businessNav = [
            {
                id: 1,
                navTitle: "Organization",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
            {
                id: 2,
                navTitle: "Loan Products",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
            {
                id: 3,
                navTitle: "Savings Products",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
            {
                id: 4,
                navTitle: "Fees and Charges",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
            {
                id: 5,
                navTitle: "Transaction",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
            {
                id: 6,
                navTitle: "Service",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
            {
                id: 7,
                navTitle: "Service Amount",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
            {
                id: 8,
                navTitle: "Settlements",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
            {
                id: 9,
                navTitle: "Reports",
                navIcon: <AiOutlineUser/>,
                route: "/"
            },
        
    ]
    const settingsNav = [
        {
            id: 1,
            navTitle: "Preference",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 2,
            navTitle: "Fees and Pricing",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
        {
            id: 3,
            navTitle: "Audit Logs",
            navIcon: <AiOutlineUser/>,
            route: "/"
        },
    ]
  return (
    <div className={styles.SideBarContainer}>
        <div className={styles.BigNavcontainer}>
            <div className={styles.Navcontainer}>
                <MdWorkOutline/>
                <p>Switch Organization</p>
            </div>
            <div className={styles.Navcontainer}>
                <AiOutlineHome/>
                <p>Dashboard</p>
            </div>
        </div>
        <div className={styles.BigNavcontainer}>
            <div>
                <p>CUSTOMERS</p>
            </div>
            {
                customersNav.map((navs)=>{
                    return(
                        <div key={navs.id} className={styles.Navcontainer}>
                            <div>{navs.navIcon}</div>
                            <div>
                               <Link href={navs.route}>
                                    <div>{navs.navTitle}</div>
                                </Link> 
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
        <div className={styles.BigNavcontainer}>
            <p>BUSSINESSES</p>
            {
                businessNav.map((navs)=>{
                    return(
                        <div key={navs.id} className={styles.Navcontainer}>
                            <div>{navs.navIcon}</div>
                            <Link href={navs.route}>
                                <div>{navs.navTitle}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        <div className={styles.BigNavcontainer}>
            <p>SETTINGS</p>
            {
                settingsNav.map((navs)=>{
                    return(
                        <div key={navs.id} className={styles.Navcontainer}>
                            <div>{navs.navIcon}</div>
                            <Link href={navs.route}>
                                <div>{navs.navTitle}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
