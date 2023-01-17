import { useState, useEffect } from "react";
import styles from "./dataNstatus.module.css"
export default function StatusDiv ({education, accountBalance}){
    const [active, setActive] = useState(false);
    // console.log(education.loanRepayment)
    const check = () =>{
        if (education.loanRepayment > 0 || accountBalance > 0 ){
            setActive(true)
        }
    }
    useEffect(()=>{
        check()
    })
    
    return(
        <>
            {
                active ?
                 <div className={styles.active}>
                    <p>Active</p>
                 </div> : 
                 <div className={styles.inActive}>
                    <p>Inactive</p>
                 </div>
            }
        </>
    )
}