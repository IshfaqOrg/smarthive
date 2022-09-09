// ** React Imports
import React from 'react';

// ** Third Party Components
import { ChevronDown } from 'react-feather';
import DataTable from 'react-data-table-component';
// import { useDispatch } from 'react-redux';
// import { getDevicesAtRiskList } from '../../redux/slices/deviceAtRiskSlice';
import customStyles from './customStyles';
import CustomPagination from './CustomPagination';
import NoDataComponent from './NoDataComponent';

function DataTablesReOrder({
  columns,
  data,
  handleDeviceInfo,
  records,
  conditionalRowStyles,
  addToggle,
  page,
  setPage,
}) {
  // ** States
  // const [currentPage, setCurrentPage] = useState(0)

  // ** Custom Pagination

  return (
    <div className="container-fluid ">
      <DataTable
        noHeader
        noDataComponent={<NoDataComponent />}
        paginationPerPage={5}
        pagination
        pointerOnHover
        highlightOnHover={false}
        style={customStyles}
        selectableRowsHighlight
        onRowClicked={handleDeviceInfo}
        data={data?.data}
        columns={columns}
        className="react-dataTable react-table-data"
        sortIcon={<ChevronDown size={10} />}
        paginationComponent={(
          <CustomPagination
            page={page}
            data={data}
            records={records}
            setPage={setPage}
          />
)}
        paginationDefaultPage={page}
        paginationRowsPerPageOptions={[5, 25, 50, 100]}
        conditionalRowStyles={conditionalRowStyles}
        addToggle={addToggle}
        customStyles={{
          noData: {
            style: {
              display: 'flex',
              justifyContent: 'space-around',
              padding: '10px',
              backgroundColor: 'transparent',
            },
          },
        }}
      />
    </div>
  );
}

export default DataTablesReOrder;
