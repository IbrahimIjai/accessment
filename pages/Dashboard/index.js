import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import DashboardComponet from '../../components/Dashboard/Dashboard';
import { getUsers } from '../api/Users';
export default function Dahboard({data}) {
// console.log(data)
  return (
    <div>
        <DashboardComponet data={data}/>
    </div>
  )
}

export async function getStaticProps(){
  const data = await getUsers();
  return{
      props: {
          data
      }
  }
}