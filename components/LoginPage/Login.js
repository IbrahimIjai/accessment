import Image from "next/image";
import styles from "./Login.module.css";
export default function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Image src="/lendsqr.png" width={100} height={30} alt="logo"/>
                    <Image src="/Union.png" width={30} height={30} alt="logo"/>
                </div>
                <div>
                    <Image src="/loginSvg.svg" width={500} height={850} alt="An Image"/>
                </div>
                
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.right}>
                    <div className={styles.welcomeText}>
                        <span className={styles.welcome}>Welcome!</span>
                        <br/><span className={styles.instruction}>Enter Login Details</span>
                    </div>
                    <div className={styles.LoginBox}>
                        <div className={styles.Inputbox}>
                            <input type="text" placeHolder="Email"/><br/>
                            <input type="password" placeHolder="password"/>
                            <span>Forgot Password?</span>
                        </div>
                        <div className={styles.LoginBtn}>LOGIN</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}