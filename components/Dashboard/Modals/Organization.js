import styles from "./styles/modalsStyle.module.css";

export default function Organization(){
    return(
        <div className={styles.OrganizationContainer}>
            <div>
                <p>Organization</p>
                <select>
                    <options value="lendsqr">lendsqr</options>
                </select>
            </div>
            <div>
                <p>Username</p>
                <p>User</p>
            </div>
            <div>
                <p>Email</p>
                <input/>
            </div>
            <div>
                <p>Date</p>
                <input/>
            </div>
            <div>
                <p>Phone number</p>
                <input/>
            </div>
            <div>
                <p>Status</p>
                <select>
                    <option></option>
                </select>
            </div>
            <div>
                <div>Reset</div>
                <div>Filter</div>
            </div>
            
            
        </div>
    )
}