import React from 'react';

import TableComponent from './TableComponent/TableComponent';
import TableFooter from './TableFooter/TableFooter';

import { Paper } from '@material-ui/core';

import useDataAPI from '../../hooks/useDataAPI';

const DataTable = ({ apiCall, diffName }) => {
  const [{ loading, error, data }, fetchData] = useDataAPI(apiCall);

  return (
    <Paper>
      <TableComponent diffName={diffName} tableRows={data} />
      <TableFooter fetchData={fetchData} loading={loading} error={error} />
    </Paper>
  )
}

export default DataTable;