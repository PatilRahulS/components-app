import React, { useState, useEffect, useMemo } from 'react';
import DataTable from '../Components/MaterialReactTable';
import { Box } from '@mui/system';

const Grid = () => {
  const isServerSideFSP = false;
  const [paging, setPaging] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [filterValues, setFilterValues] = useState([]);

  const data = [
    {
      name: 'John', // key "name" matches `accessorKey` in ColumnDef down below
      age: 30, // key "age" matches `accessorKey` in ColumnDef down below
    },
    {
      name: 'Sara',
      age: 25,
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: 'Name',
        accessorKey: 'name', //simple recommended way to define a column
      },
      {
        header: 'Age',
        accessorKey: 'age',
        accessorFn: (dataRow) => parseInt(dataRow.age), //alternate way to access data if processing logic is needed
      },
    ],
    []
  );
  const rowActionMenues = [
    { name: 'Edit', route: '/edit-clinic' },
    { name: 'Details', route: '/clinic-details' },
  ];

  const topActionButtons = [{ name: 'ADD CLINIC', route: '/add-clinic' }];

  return (
    <DataTable
      data={data}
      columns={columns}
      customRowActionMenus={rowActionMenues}
      topActionButtons={topActionButtons}
      columnOrderInitially={['mrt-row-actions', 'name', 'age']}
      columnsVisibleInitially={{
        'mrt-row-actions': true,
        name: true,
        age: true,
      }}
      type={'user'}
    />
  );
};
export default Grid;
