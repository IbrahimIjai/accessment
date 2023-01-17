import { useState } from "react"
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import GeneralDeatails from "./components/GeneralDetails";
import Link from "next/link";
import styles from "./userDetails.module.css";

export default function UserDetails ({User}){
    console.log(User.profile.avatar)
    const Profile = User.profile;
    const AllTabs = [
        {
            id: 1,
            TabTitle: "General Details",
            Body: <GeneralDeatails User={User}/>
        },
        {
            id: 2,
            TabTitle: "Document",
            Body: <div><p>Systems will be updated soon😊😊</p></div>
        },
        {
            id: 3,
            TabTitle: "Bank Details",
            Body: <div><p>Systems will be updated soon😊😊</p></div>
        },
        {
            id: 4,
            TabTitle: "Loans",
            Body: <div><p>Systems will be updated soon😊😊</p></div>
        },
        {
            id: 5,
            TabTitle: "Savings",
            Body: <div><p>Systems will be updated soon😊😊</p></div>
        },
        {
            id: 6,
            TabTitle: "App and System",
            Body: <div><p>Systems will be updated soon😊😊</p></div>
        }
    ]
    const [CurTab, setCurTab] = useState(AllTabs[0]);
    return(
        <div className={styles.Container}>
            <div>
                <div className={styles.Nav}>
                    <Link href="/"><BiArrowBack size="2em"/></Link>
                    <Link href="/"><p>Back to users Page</p></Link>
                </div>
            <div className={styles.HeadSec2}>
                <p>Users details</p>
                <div className={styles.actionButtons}>
                    <div>BlackList</div>
                    <div className={styles.activatebtn}>Activate User</div>
                </div>
            </div>
            </div>
            <div className={styles.HeaderCardContainer}>
                <div className={styles.CardContainer}>
                    <div className={styles.sec1}>
                        <div className={styles.profileImage}>
                            <Image src={Profile.avatar} layout="fill" objectFit="cover" alt="Profile picture"/>
                        </div>
                        <div className={styles.Names}>
                            <span className={styles.RName}>{Profile.firstName} {Profile.lastName}</span>
                            <span>{User.userName}</span>
                        </div>
                    </div> 
                    <div className={styles.sec2}>
                        <p>Users Tier</p>
                        <div>
                            stars
                        </div>
                    </div> 
                    <div className={styles.sec3}>
                        <p>{User.accountBalance*1000 }</p>
                        <span>{User.accountNumber}/Bank Name</span>
                    </div>
                </div>
                <div className={styles.Tabs}>
                    {
                        AllTabs.map((tab)=>{
                            return(
                                    <div
                                        key={tab.id}
                                        onClick={()=> CurTab.id !== tab.id && setCurTab(tab)}
                                        active={CurTab.id === tab.id}
                                        style={{
                                            color: CurTab.id  === tab.id ? "#39CDCC" : "",
                                            fontWeight: CurTab.id  === tab.id && "700",
                                            borderBottom: CurTab.id  === tab.id  ? "2px solid #39CDCC" : "",
                                          }}
                                    >
                                        {tab.TabTitle}
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.Tabcontent}>
                {CurTab.Body}
            </div>
        </div>
    )
}