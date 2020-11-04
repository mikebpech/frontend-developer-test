import React, { useCallback, useEffect, useState } from 'react';
import { format } from 'fecha';
import './tableStyles.css';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@material-ui/core';

const DIRECTIONS = {
  ORDER_ASCENDING   : 'asc',
  ORDER_DESCENDING  : 'desc'
}

// Would typically export these.

/**
 * @param {array} data - Collection of `rows` you would like to sort.
 * @param {string} direction - Sort by `asc` or `desc`.
 * @returns {array} sortedRows 
 */
const sortByDirection = (data, direction) => {
  return data.sort((a, b) => {
    return direction === 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp;
  });
}

const TableComponent = ({ tableRows = [], diffName }) => {
  const [order, setOrder]     = useState(DIRECTIONS.ORDER_DESCENDING);
  const [sorted, setSorted]   = useState(sortByDirection(tableRows, order));

  const toggleSort = useCallback(() => {
    const sortDirection = (order === DIRECTIONS.ORDER_ASCENDING) ? DIRECTIONS.ORDER_DESCENDING : DIRECTIONS.ORDER_ASCENDING
    setOrder(sortDirection);

    const sortedData = sortByDirection(tableRows, sortDirection);    
    setSorted(sortedData);

  }, [order, sorted]);

  useEffect(() => {
    const sortedData = sortByDirection(tableRows, order);
    setSorted(sortedData);
  }, [tableRows])

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography className="tableHeader" variant="subtitle2">
                <TableSortLabel onClick={toggleSort} active={true} direction={order}>
                  Date
                </TableSortLabel>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className="tableHeader" variant="subtitle2">
                {diffName} ID
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className="tableHeader" variant="subtitle2">
                Old Value
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className="tableHeader" variant="subtitle2">
                New Value
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { sorted.map(row => row.diff.map((diff) => (
            <TableRow key={row.id}>
              <TableCell>
                <Typography variant="subtitle2">
                  {format(new Date(row.timestamp), 'isoDate')}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  {row.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  {diff.oldValue}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  {diff.newValue}
                </Typography>
              </TableCell>
            </TableRow>
          ))) }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent;