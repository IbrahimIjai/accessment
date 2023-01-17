import Layout from "../components/Layout/Layout";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import UserDetails from "../components/Dashboard/UserDetailsDiv/UserDetails";
import { useState } from "react";
export default function Test() {
    const AllTabs = [
        {
            id: 1,
            TabTitle: "General Details",
            Body: <UserDetails/>
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
    console.log(CurTab)
return (
    <>
      <Layout>
        <div>
            <div>
                <BiArrowBack/>
                <p>Back to users Page</p>
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

        {/* <div>
                <div>
                    <div>
                        <p>Personal Information</p>
                        <div>
                            <div>
                                <p>FullName</p>
                                <p>FullName</p>
                            </div>
                            <div>
                                <p>Phone Number</p>
                                <p>FullName</p>
                            </div>
                            <div>
                                <p>Email Address</p>
                                <p>FullName</p>
                            </div>
                            <div>
                                <p>BVN</p>
                                <p>FullName</p>
                            </div>
                            <div>
                                <p>Gender</p>
                                <p>FullName</p>
                            </div>
                            <div>
                                <p>Marital</p>
                                <p>FullName</p>
                            </div>
                            <div>
                                <p>Children</p>
                                <p>FullName</p>
                            </div>
                            <div>
                                <p>Type of residence</p>
                                <p>FullName</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Education and Employment</p>
                        <div>
                            <div>
                                <p>Level of Education</p>
                                <p>jfj</p>
                            </div>
                            <div>
                                <p>Employment Status</p>
                                <p>jfj</p>
                            </div>
                            <div>
                                <p>Sector of Employment</p>
                                <p>jfj</p>
                            </div>
                            <div>
                                <p>Duration of Employment</p>
                                <p>jfj</p>
                            </div>
                            <div>
                                <p>Official Email</p>
                                <p>jfj</p>
                            </div>
                            <div>
                                <p>Monthly Income</p>
                                <p>jfj</p>
                            </div>
                            <div>
                                <p>Loan Repayment</p>
                                <p>jfj</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Socials</p>
                        <div>
                            <div>
                                <p>FullName</p>
                                <p>jdjd</p>
                            </div>
                            <div>
                                <p>PHONE NUMBER</p>
                                <p>jdjd</p>
                            </div>
                            <div>
                                <p>EMAIL ADDRESS</p>
                                <p>jdjd</p>
                            </div>
                            <div>
                                <p>RELATIONSHIP</p>
                                <p>jdjd</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div> */}
      </Layout>
    </>
  )
}
