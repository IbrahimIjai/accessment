import Image from "next/image";
import styles from "./UsersTable.module.css";
import { AiOutlineMore, AiOutlineWifi } from "react-icons/ai";
import DateDiv from "./dateAndStatus/Date";
import StatusDiv from "./dateAndStatus/Status";
import Link from "next/link";
import More from "../Modals/More";
import Organization from "../Modals/Organization";
import { useState } from "react";
export default function UsersTable({currentUsers}) {
    const tableHeads = [
        {
            id: 1,
            title: "ORGANIZATION",
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

    const [organization, setOrganizationModal] = useState(false);
    const handler =()=>{
        setOrganizationModal(!organization)
    }

    return(
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                {
                    tableHeads.map((tableHead)=>{
                        return(
                            <div key={tableHead.id}  className={styles.header}>
                                <p>{tableHead.title}</p>
                                <AiOutlineWifi onClick={tableHead.id == 1 && handler} size="1.7em"/>
                            </div>
                        )
                    })
                }
                {
                    organization && <Organization/>
                }
            </div>
          <div>
            <div>
                {
                    currentUsers.map((user)=>{
                        return(
                            <div key={user.id} className={styles.userContainer}>
                                <Link href={"/UserPage/" + user.id}><p className={styles.user}>{user.orgName}</p></Link>
                                <Link href={"/UserPage/" + user.id}><p className={styles.user}>{user.userName}</p></Link>
                                <Link href={"/UserPage/" + user.id}><p className={styles.user}>{user.email}</p></Link>
                                <Link href={"/UserPage/" + user.id}><p className={styles.user}>{user.phoneNumber}</p></Link>
                                <Link href={"/UserPage/" + user.id}><p className={styles.user}><DateDiv date={user.createdAt} /></p></Link>
                                <Link href={"/UserPage/" + user.id}>
                                    <div className={styles.user}>
                                        <StatusDiv  education={user.education} accountBalance={user.accountBalance}/> 
                                        <AiOutlineMore  size="2em"/>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
          </div>  
        </div>
    )
}