import React from 'react';
import ReactPaginate from 'react-paginate';

function CustomPagination({
  page, data, records, setPage,
}) {
  // ** Function to handle Pagination
  const handlePagination = (page) => {
    if (records) {
      // dispatch(getDevicesAtRiskList({type : recordType, page : page.selected + 1}))
    }
    console.log(page);
    setPage(page.selected + 1);
    // setCurrentPage(page.selected)
  };
  return (
    <ReactPaginate
      nextLabel=""
      breakLabel="..."
      previousLabel=""
      pageRangeDisplayed={1}
      forcePage={page - 1}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item numbers-data"
      breakClassName="page-item numbers-data"
      nextLinkClassName="page-link next-data"
      pageLinkClassName="page-link active-links"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link next-data"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      pageCount={data?.totalPage}
      onPageChange={(page) => handlePagination(page)}
      containerClassName="pagination minPosHeight react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );
}
export default CustomPagination;
