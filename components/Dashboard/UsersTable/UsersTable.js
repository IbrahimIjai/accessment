import { getUsers} from "../../../pages/api/Users";
import { useState, useEffect } from "react";
import styles from "./UsersTable.module.css"
export default function UsersTable({currentUsers}) {
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

    return(
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                {
                    tableHeads.map((tableHead)=>{
                        return(
                            <div key={tableHead.id}>
                                <p>{tableHead.title}</p>
                            </div>
                        )
                    })
                }
            </div>
          <div>
                    <div>
                        <div>
                            {
                                tableHeads.map((tableHead)=>{
                                    return(
                                        <div key={tableHead.id}>
                                            <p>{tableHead.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            currentUsers.map((user)=>{
                                return(
                                    <div key={user.id}>
                                        <p>{user.orgName}</p>
                                        <p>{user.userName}</p>
                                        <p>{user.email}</p>
                                        <p>{user.phoneNumber}</p>
                                        <p>{user.createdAt}</p>
                                        <div>Status</div>
                                    </div>
                                )
                            })
                        }
                    </div>

          </div>  
        </div>
    )
}