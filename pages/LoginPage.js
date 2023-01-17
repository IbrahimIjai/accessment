import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import Layout from '../components/Layout/Layout';
import Login from '../components/LoginPage/Login';
export default function LoginPage() {
  
  return (
    <>
        <div>
          <Login/>
        </div>
    </>
  )
}
