export default function UsersTablePagination({
    totalPosts,
    usersPerPage,
    currentPage,
    setCurrentPage
}) {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / usersPerPage); i++) {
        pages.push(i);
    }
    return(
        <div>
           <div>{currentPage}</div> 
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    )
}