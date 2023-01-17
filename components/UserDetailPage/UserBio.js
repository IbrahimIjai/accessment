import { useState } from "react"
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import GeneralDeatails from "./components/GeneralDetails";

export default function UserDetails (){
    const AllTabs = [
        {
            id: 1,
            TabTitle: "General Details",
            Body: <GeneralDeatails/>
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
    const [CurTab, setCurTab] = useState(AllTabs[2]);
    return(
        <>
            <div>
                <div className={StyleSheet.Nav}>
                    <Link href="/"><BiArrowBack/></Link>
                    <Link href="/"><p>Back to users Page</p></Link>
                </div>
            <div>
                <p>Users details</p>
                <div>
                    <button>BlackList</button>
                    <button>Activate User</button>
                </div>
            </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            {/* <Image src="" layout="fill" objectFit="cover" alt="Profile picture"/> */}
                        </div>
                        <div>
                            <p>Name</p>
                            <p>UserName</p>
                        </div>
                    </div> 
                    <div>
                        <p>Users Tier</p>
                        <div>
                            stars
                        </div>
                    </div> 
                    <div>
                        <p>Account Balance</p>
                        <p>AccountNumber/Bank Name</p>
                    </div>
                </div>
                <div>
                    {
                        AllTabs.map((tab)=>{
                            return(
                                    <button
                                        key={tab.id}
                                        onClick={()=> CurTab.id !== tab.id && setCurTab(tab)}
                                        // active={CurTab.id === tab.id}
                                    >
                                        {tab.TabTitle}
                                    </button>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                {CurTab.Body}
            </div>
        </>
    )
}