import React from 'react'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'
const Pagination = ({totalPosts, currentPage, paginate}) => {
    const pageNumbers = [];
    // lapozó számsor létrehozása
    for (let i = 1; i <= Math.ceil(18 / 6); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <div className='paginator-container'>
                <div 
                    className={`pager ${pageNumbers[0] === currentPage && "disabled"}`} 
                    onClick={() => paginate(currentPage - 1)}
                >
                    <HiOutlineArrowNarrowLeft className='pager-icon' />
                </div>
                <ul className='page-wrapper'>
                    {pageNumbers.map((number) => (
                        <li
                        key={number}
                        className={`pagination-item ${currentPage === number && "active"}`}
                        onClick={() => paginate(number)}
                        >
                        {number}
                        </li>
                    ))}
                </ul>
                <div 
                    className={`pager ${pageNumbers.reverse()[0] === currentPage && "disabled"}`} 
                    onClick={() => paginate(currentPage + 1)}
                >
                    <HiOutlineArrowNarrowRight className='pager-icon' />
                </div>
            </div>

        </>
    )
}

export default Pagination