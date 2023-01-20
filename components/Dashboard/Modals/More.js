import { HiOutlineEye } from "react-icons/hi";
import { BiUserX, BiUserCheck } from "react-icons/bi";
import styles from "./styles/modalsStyle.module.css";
export default function More(){
    
    return(
        <div className={styles.moreContainer}>
            <div>
                <HiOutlineEye/>
                <p>View Details</p>
            </div>
            <div>
                <BiUserX/>
                <p>Blacklist user</p>
            </div>
            <div>
                <BiUserCheck/>
                <p>Activate user</p>
            </div>
        </div>
    )
}