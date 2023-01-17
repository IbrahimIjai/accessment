import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
// import Layout from '../components/Layout/Layout';
import { useState } from 'react';
export default function Home() {
  const Pages = [
    {
      id:1,
      name: " DASHBOARD PAGE",
      route: "/Dashboard"
    },
    {
      id:2,
      name: " LoginPage PAGE",
      route: "/LoginPage"
    },
    {
      id:3,
      name: " User PAGE",
      route: "/UserPage"
    },
    {
      id:4,
      name: " USERDETAIL PAGE",
      route: "/UserPage/1"
    }
  ]
  const [scale, setScale] = useState(1);
  
  const handleClick = () => {
    setScale(0.8);
  };

  return (
    <>
      {/* <Layout>
        <div className={styles.Container}>
          <div className={styles.smallCOntainer}>
            <div className={styles.NavItems}>
              {
                Pages.map((page)=>{
                  return (
                    <div key={page.id}>
                      <Link href={page.route}>
                        <a>{page.name}</a>
                      </Link>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </Layout> */}

      <div className={styles.container}>
          <div className={styles.logo}>
                <Image src="/lendsqr.png" width={100} height={30} alt="logo"/>
                <Image src="/Union.png" width={30} height={30} alt="logo"/>
          </div>
        <div className={styles.section1}>
          <p className={styles.heading}>Lendsqr Frontend Engineer Assessment</p>
          <p className={styles.heading2}>Submitted by <span>Ibrahim Ijai</span></p>
          <p className={styles.linkHeading}>LINKS TO SAMPLE PAGES BUILT</p>
          <div className={styles.NavItems}>

            {
              Pages.map((page)=>{
                return (
                  <div 
                      key={page.id} 
                      className={styles.Nav}
                      style={{
                        transform: `scale(${scale})`,
                        transition: "transform 0.3s ease-in-out",
                      }}
                      // onClick={handleClick}
                  
                  >
                    <Link href={page.route}>
                      <a>{page.name}</a>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.Introduction}>
            <p>Click here to see my Resume and portfolio</p>
          </div>
        </div>
            
      </div>
    </>
  )
}
