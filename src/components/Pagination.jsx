import React from 'react'

export default function Pagination(props) {
    // intiate an empty array for the number of page
    let pageNumber = []
    //loop each time the i is less then or equal to the number of pages 
    //which the total posts devided by number of post per page 
    //exemple 10 posts per page out of 100 posts means 10 pages
    for(let i = 1 ; i <= Math.ceil(props.totalPosts / props.postPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <div>
            <ul className="pagination">
           {pageNumber.map(page =>{
               //loop throgh the page number and add one page each to the pagination bottom
               return <li onClick={()=> props.setPage(page)} className="waves-effect" key={page}><a href="#">{page}</a></li> 
           })}

           </ul>
        </div>
    )
}
