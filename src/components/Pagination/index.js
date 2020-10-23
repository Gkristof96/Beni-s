import React from 'react'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'
const Pagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(30 / 10); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <div className='paginator-container'>
                <div className='pager'>
                    <HiOutlineArrowNarrowLeft />
                </div>
                <ul>
                    {pageNumbers.map((number) => (
                        <li
                        key={number}
                        className={`${currentPage === number && "active"}`}
                        onClick={() => paginate(number)}
                        >
                        {number}
                        </li>
                    ))}
                </ul>
                <div className='pager'>
                    <HiOutlineArrowNarrowRight />
                </div>
            </div>

        </>
    )
}

export default Pagination