import styles from "./Pagination.module.css";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


export default function UsersTablePagination({
totalUsers,
  usersPerPage,
  currentPage,
  setCurrentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }
  console.log(pages)
  console.log(currentPage)
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p>showing</p>
            <div className={styles}>
                {/* <p>{currentPage * 10}</p>
                <AiOutlineDown/> */}
                <select
                    className={styles.selectBox}
                    onChange={(e) => setCurrentPage( e.target.value)}
                >
                    {
                            pages.map((pageNumber, i)=>{
                               return(
                                <option key={i} value={pageNumber}>{10 * currentPage}</option>
                            )
                            })
                    }
                    
                </select>
            </div>
            <p>out of {totalUsers}</p>
        </div>
      <div className={styles.right}>
        <div onClick={()=>setCurrentPage(currentPage--)} className={styles.directionRight}><AiOutlineLeft/></div>
          {pages.map((page, index) => {
              return (
              <div
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`${styles.text} ${page == currentPage ? styles.active : ""}`}
              >
                  {page}
              </div>
              );
          })}
          <div onClick={()=>setCurrentPage(currentPage++)} className={styles.directionRight}><AiOutlineRight/></div>
      </div>
      
    </div>
  );
}
