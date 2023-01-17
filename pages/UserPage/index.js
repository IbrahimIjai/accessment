// import Layout from "../../components/Layout/Layout"
// import Image from "next/image";
// import styles from "../../components/Dashboard/Dashboard.module.css";
// import { useState, useEffect } from 'react';
import { getUsers } from "../api/Users";
// import UsersTablePagination from "../../components/Dashboard/UsersTable/paginationDiv/Pagination";
// import UsersTable from "../../components/Dashboard/UsersTable/UsersTable"
import DashboardComponet from "../../components/Dashboard/Dashboard";
export default function UsersPage ({data}){
    return(
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