import { useState, useEffect } from "react"
export default function StatusDiv ({education, accountBalance}){
    const [active, setActive] = useState(false);
    console.log(education.loanRepayment)
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
                 <div>
                    <p>Active</p>
                 </div> : 
                 <div>
                    <p>Inactive</p>
                 </div>
            }
        </>
    )
}