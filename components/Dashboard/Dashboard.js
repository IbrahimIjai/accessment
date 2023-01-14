import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../Layout/Layout';
import styles from "./Dashboard.module.css";
import { useState, useEffect } from 'react';
import { getUsers } from '../../pages/api/Users';
import UsersTable from './UsersTable/UsersTable';
import UsersTablePagination from './UsersTable/paginationDiv/Pagination';
export default function DashboardComponet() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(10);

    const userCardStats = [
        {
            id:1,
            icon: "",
            tag: "USERS",
            number: "2,435"
        },
        {
            id:2,
            icon: "",
            tag: "ACTIVE USERS",
            number: "2,435"
        },
        {
            id:3,
            icon: "",
            tag: "USERS WITH LOAN",
            number: "12,435"
        },
        {
            id:4,
            icon: "USERS WITH SAVINGS",
            tag: "Users",
            number: "102,453"
        }
    ]
    const tableHeads = [
        {
            id: 1,
            title: "ORGANOZATION",
        },
        {
            id: 2,
            title: "USERNAME",
        },
        {
            id: 3,
            title: "EMAIL",
        },
        {
            id: 4,
            title: "PHONE NUMBER",
        },
        {
            id: 5,
            title: "DATE JOINED",
        },
        {
            id: 6,
            title: "STATUS",
        },
    ]

    const lastUserIndex = currentPage * usersPerPage;
    const firstPostIndex = lastUserIndex - usersPerPage;
    const currentUsers = users.slice(firstPostIndex, lastUserIndex);

    useEffect(() => {
        async function fetchData() {
          const data = await getUsers();
          setUsers(data);
        }
        fetchData();
      }, []);

      console.log(users)

  return (
    <>
      <Layout>
        <div className={styles.container}>
            <div className={styles.userContainer}>
                <p>Users</p>
                <div className={styles.cardContainer}>
                    {
                        userCardStats.map((userStats)=>{
                            return(
                                <div key={userStats.id} className={styles.card}>
                                    <div>Icon</div>
                                    <p>{userStats.tag}</p>
                                    <p className={styles.cardNumber}>{userStats.number}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <UsersTable  currentUsers={currentUsers} />
            <UsersTablePagination 
                totalPosts={users.length}
                usersPerPage={usersPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
      </Layout>
    </>
  )
}
