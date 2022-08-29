import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

interface PaginationProps {
    profilesPerPage: number,
    totalProfile: number
}

const MyPagination: React.FC<PaginationProps> = ({ totalProfile, profilesPerPage}) => {
    console.log(profilesPerPage)

    const pageNumbers: number[] = []

    // for (let i = 1; i <= Math.ceil(totalProfile, profilesPerPage); i++) {
    //     pageNumbers.push(i)
    // }
    return (
        <Pagination className="d-flex align-items-center justify-content-between px-5">
                <div className="pagination-item">
                        <Pagination.Prev >
                            <i className="icon-arrow-left"></i>
                            Previous
                        </Pagination.Prev>
                </div>

                <div className="pagination-item d-flex">
                    {
                        pageNumbers.map(number => {
                            return (
                                <Pagination.Item key={number}>{number}</Pagination.Item>
                            )
                        })
                    }
                        {/*<Pagination.Item active>{1}</Pagination.Item>*/}
                        {/*<Pagination.Item>{10}</Pagination.Item>*/}
                        {/*<Pagination.Item>{11}</Pagination.Item>*/}
                        {/*<Pagination.Ellipsis />*/}
                        {/*<Pagination.Item>{12}</Pagination.Item>*/}
                        {/*<Pagination.Item>{13}</Pagination.Item>*/}
                        {/*<Pagination.Item>{20}</Pagination.Item>*/}
                </div>

                <div className="pagination-item">
                        <Pagination.Next >
                                Next
                            <i className="icon-arrow-right"></i>
                        </Pagination.Next>
                </div>
        </Pagination>
    );
}

export default MyPagination;