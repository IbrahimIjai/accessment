import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
    return (
      <div  className={styles.Navbar}>
       <div className={styles.Logo}>
            <Image src="/lendsqr.png" width={100} height={30} alt="logo"/>
            <Image src="/Union.png" width={30} height={30} alt="logo"/>
       </div>
       
       <div class={styles.Search}>
            <input class="form-field" type="Text" placeholder="Search for anything"/>
            <div className={styles.searchIcon}>
                <AiOutlineSearch className={styles.searchIconMain} />
            </div>
        </div>

        <div className={styles.Navigators}>
            <Link href="/">
                <a className={styles.docs}>Docs</a>
            </Link>
            <IoMdNotificationsOutline size="2rem"/>
            
            <div className={styles.userProfile}>
                <div className={styles.userProfileImage}>
                    <Image src="/ImageNav.jpg" width={40} height={60} alt="logo" layout="fill" objectFit="cover"/>
                </div>
                <div className={styles.userProfileLink}>
                    <span>Adedeji</span>
                    <Image src="/arrowdown.png" width={10} height={10} alt="logo"/>
                </div>
                
            </div>
        </div>
      </div>
    )
  }
  