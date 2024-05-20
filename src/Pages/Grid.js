import React, { useMemo } from 'react';
import DataTable from '../Components/MaterialReactTable';

const Grid = () => {
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

  const topActionButtons = [{ name: 'Add Record', route: null }];

  return (
    <>
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
    </>
  );
};
export default Grid;
