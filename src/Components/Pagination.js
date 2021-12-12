import React from 'react'

const Pagination = ( {postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const mapPageNumbers = () => pageNumbers.map(number => {
                return (
                <li key={number}> 
                    <a onClick={() => paginate(number)} hre="!#"> 
                        {number}
                    </a>
                </li>
                )
        })
    

    return (
        <nav>
            <ul> 
                {mapPageNumbers()}
            </ul>
        </nav>
    )
}

export default Pagination;