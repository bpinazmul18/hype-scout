import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

interface PaginationProps {
    currentPage: number,
    profilesPerPage: number,
    totalProfile: number,
    paginate: (number: number) => void,
    onPrev: () => void,
    onNext: () => void
}

const MyPagination: React.FC<PaginationProps> = ({ currentPage, totalProfile, profilesPerPage, paginate, onPrev, onNext}) => {
    const pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalProfile / profilesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Pagination className="d-flex align-items-center justify-content-between px-5">
                <div className="pagination-item">
                        <Pagination.Prev disabled={currentPage === 1} onClick={() => onPrev()}>
                            <i className="icon-arrow-left"></i>
                            Previous
                        </Pagination.Prev>
                </div>

                <div className="pagination-item d-flex">
                    {
                        pageNumbers.map(number => {
                            return (
                                <Pagination.Item className={`${currentPage === number ? 'active' : ''}`} onClick={() => paginate(number)} key={number}>{number}</Pagination.Item>
                            )
                        })
                    }
                        {/*<Pagination.Item>{11}</Pagination.Item>*/}
                        {/*<Pagination.Ellipsis />*/}
                        {/*<Pagination.Item>{20}</Pagination.Item>*/}
                </div>

                <div className="pagination-item">
                        <Pagination.Next disabled={pageNumbers.length === currentPage} onClick={() => onNext()}>
                                Next
                            <i className="icon-arrow-right"></i>
                        </Pagination.Next>
                </div>
        </Pagination>
    );
}

export default MyPagination;