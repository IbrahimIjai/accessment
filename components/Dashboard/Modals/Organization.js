import styles from "./styles/modalsStyle.module.css";

export default function Organization(){
    return(
        <div className={styles.OrganizationContainer}>
            <div className={styles.select}>
                <p>Organization</p>
                <select>
                    <options value="lendsqr">lendsqr</options>
                </select>
            </div>
            <div className={styles.select}>
                <p>Username</p>
                <input placeholder="User" type="text"/>
            </div>
            <div className={styles.select}>
                <p>Email</p>
                <input placeholder="Email" type="email"/>
            </div>
            <div className={styles.select}> 
                <p>Date</p>
                <input placeholder="Date" type="date"/>
            </div>
            <div className={styles.select}>
                <p>Phone number</p>
                <input placeholder="Phone number" type="number"/>
            </div>
            <div className={styles.select}>
                <p>Status</p>
                <select>
                    <option value="Active">Active</option>
                    <option value="InActive">InActive</option>
                </select>
            </div>
            <div className={styles.btn}>
                <div className={styles.reset}>Reset</div>
                <div className={styles.filter}>Filter</div>
            </div>
            
            
        </div>
    )
}