import React from "react"
import BtnStyle from "./../Users.module.css"
const Paginator = ({page, onPageBtnClicked, currentPage}) => {
  return <li className={`${BtnStyle.usersPage} ${currentPage === page && BtnStyle.selectedPage}`} key={page}>
  <button className={BtnStyle.usersPageBtn} onClick={()=> {
    onPageBtnClicked(page)
    }}>{page}</button>
</li>
}

export default Paginator