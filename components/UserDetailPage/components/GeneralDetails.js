import { useState } from "react"
import styles from "./Styles/GeneralDetails.module.css";
export default function GeneralDeatails ({User}){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.personalInfo}>
                <p>Personal Information</p>
                <div className={styles.content}>
                    <div className={styles.contentDiv}>
                        <p>FullName</p>
                        <span>{User.profile.firstName} {User.profile.lastName}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Phone Number</p>
                        <span>{User.phoneNumber}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Email Address</p>
                        <span>{User.email}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>BVN</p>
                        <span>{User.profile.bvn}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Gender</p>
                        <span>{User.profile.gender}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Marital</p>
                        <span>Nil</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Children</p>
                        <span>Nil</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Type of residence</p>
                        <span>FullName</span>
                    </div>
                </div>
            </div>
            <div className={styles.personalInfo}>
                <p>Education and Employment</p>
                <div className={styles.content}>
                    <div className={styles.contentDiv}>
                        <p>Level of Education</p>
                        <span>{User.education.level}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Employment Status</p>
                        <span>{User.education.employmentStatus}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Sector of Employment</p>
                        <span>{User.education.sector}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Duration of Employment</p>
                        <span>{User.education.duration}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Official Email</p>
                        <span>{User.education.officeEmail}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Monthly Income</p>
                        <span>{User.education.monthlyIncome[0]}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Loan Repayment</p>
                        <span>{User.education.loanRepayment}</span>
                    </div>
                </div>
            </div>
            <div className={styles.personalInfo}>
                <p>Social</p>
                <div className={styles.content}>
                    <div className={styles.contentDiv}>
                        <p>Twitter</p>
                        <span>{User.socials.twitter} {User.guarantor.lastName}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Facebook</p>
                        <span>{User.socials.facebook}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Instagram</p>
                        <span>User.socials.Instagram</span>
                    </div>
                </div>
            </div>
            <div className={styles.personalInfo}>
                <p>Guarator</p>
                <div className={styles.content}>
                    <div className={styles.contentDiv}>
                        <p>FullName</p>
                        <span>{User.guarantor.firstName} {User.guarantor.lastName}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>PHONE NUMBER</p>
                        <span>{User.guarantor.phoneNumber}</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>EMAIL ADDRESS</p>
                        <span>User.guarantor.addresss</span>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>RELATIONSHIP</p>
                        <span>NIL</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}