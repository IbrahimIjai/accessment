import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import Layout from '../components/Layout/Layout';
export default function Home() {
  const Pages = [
    {
      id:1,
      name: " DASHBOARD PAGE",
      route: "/"
    },
    {
      id:2,
      name: " LoginPage PAGE",
      route: "/"
    },
    {
      id:3,
      name: " User PAGE",
      route: "/"
    },
    {
      id:4,
      name: " USERDETAIL PAGE",
      route: "/"
    }
  ]
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  )
}
