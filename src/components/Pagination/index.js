import React from 'react'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'
const Pagination = ({totalPosts, currentPage, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(18 / 6); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <div className='paginator-container'>
                <div className={`pager ${pageNumbers[0] === currentPage && "disabled"}`}>
                    <HiOutlineArrowNarrowLeft className='pager-icon' onClick={() => paginate(currentPage - 1)}/>
                </div>
                <ul>
                    {pageNumbers.map((number) => (
                        <li
                        key={number}
                        className={`pagination-item${currentPage === number ? "active" : ''}`}
                        onClick={() => paginate(number)}
                        >
                        {number}
                        </li>
                    ))}
                </ul>
                <div className={`pager ${pageNumbers.reverse()[0] === currentPage && "disabled"}`}>
                    <HiOutlineArrowNarrowRight className='pager-icon' onClick={() => paginate(currentPage + 1)}/>
                </div>
            </div>

        </>
    )
}

export default Pagination