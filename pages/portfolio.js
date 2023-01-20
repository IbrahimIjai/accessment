import Navbar from "../components/Navbar/Navbar"
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Portfolio(){
return(
    <div >
        <Navbar/>
        <div className={styles.portfolioContainer}>
            <h1>Welcome 😀😀</h1>
            <p>Here are project which I built recently.</p>
            <div className={styles.projects}>
                <div className={styles.projectCard}>
                    <Link href="qatar.distant.finance">
                        <p className={styles.projectLink}>Distant Finance Betting Platform</p>
                    </Link>
                    <p className={styles.projectDesc}>
                        A fullstack decentralized application where anyone can place bet with
                    </p>
                </div>
                <div className={styles.projectCard}>
                    <Link href="mart.distant.finance">
                        <p className={styles.projectLink}>Distant Finance Betting Platform</p>
                    </Link>
                    <p className={styles.projectDesc}>Distant finance is an NFT Ecosystem, where we focus majorly on providing more utilities for NFT on KCC network. Distant finance NFT Marketplace enables users to trade, auction and even create NFTs. Lending (under collaterised and over-collaterised) is coming up this month also.</p>
                </div>
                <div className={styles.projectCard}>
                    <Link href="sama.texostarter.com">
                        <p className={styles.projectLink}>Texostarter, A multichain Launchpad</p>
                    </Link>
                    <p className={styles.projectDesc}>Texostarter is a decentralized and interporable incubator and Launchpad for ERC20 tokens and NFTs</p>
                </div>
            </div>
            <Link href="0">
                    <p className={styles.cv}> Click and view my Resume</p>
            </Link>
           
            
        </div>
    </div>
)
}