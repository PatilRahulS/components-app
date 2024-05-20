import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  MaterialReactTable,
  MRT_ToggleFullScreenButton,
  MRT_ShowHideColumnsButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, MenuItem, IconButton, Tooltip } from '@mui/material';
import {
  Delete,
  Edit,
  Visibility,
  Settings,
  VisibilityOff,
  VisibilityOutlined,
  DoneAll,
  Close,
} from '@mui/icons-material';
import CustomButton from './Button';

const propTypes = {
  columns: PropTypes.array.isRequired,
  isInlineEdit: PropTypes.bool,
  handleSaveRowEdits: PropTypes.func,
  handleCancelRowEdits: PropTypes.func,
  editingMode: PropTypes.oneOf(['modal', 'row', 'cell', 'table']),
  customRowActionMenus: PropTypes.array,
  topActionButtons: PropTypes.array,
  type: PropTypes.string,
  columnFilterFunc: PropTypes.func,
};

const defaultProps = {
  columns: [],
  data: [],
  isInlineEdit: false,
  editingMode: 'modal',
  customRowActionMenus: [],
  topActionButtons: [],
  type: '',
  columnFilterFunc: () => {},
  gblFlterFnc: 'contains',
  enableRowSelection: false,
  rowSelection: [],
  setRowSelection: {},
  disable: false,
  enableStickyHeader: false,
  enableRowActions: true,
  enableToolbarInternalActions: true,
  enableTopToolbar: true,
};

const DataTable = ({
  columns,
  data,
  totalRowCount,
  handleSaveRowEdits,
  handleCancelRowEdits,
  isInlineEdit,
  editingMode,
  customRowActionMenus,
  topActionButtons,
  columnsVisibleInitially,
  columnOrderInitially,
  type,
  isLoading,
  columnFilterFunc = () => {},
  onPagingFunc = () => {},
  colSortFunc = () => {},
  globalFilterFunc = () => {},
  serverSideSFP,
  setRowSelection,
  rowSelection,
  enableRowActions,
  enableRowSelection,
  muiTableBodyCellEditTextFieldProps,
  renderBottomToolbarCustomActions,
  disable,
  enablePagination,
  renderRowActions,
  enableStickyHeader,
  gblFlterFnc,
  enableToolbarInternalActions,
  enableTopToolbar,
}) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [showGlobalFilter, setShowGlobalFilter] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState(
    columnsVisibleInitially
  );
  const [density, setDensity] = useState('compact');
  const [showColumnFilters, setShowColumnFilters] = useState(false);
  const [sorting, setSorting] = useState([]);
  const [columnOrder, setColumnOrding] = useState(columnOrderInitially);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [disabledSaveState, setDisabledSaveState] = useState(false);
  const [disabledClearState, setDisabledClearState] = useState(false);

  const isFirstRender = useRef(true);

  //   const { tableStateList, tableStateSaving, tableStateRemoveLoading } =
  //     useSelector((state) => ({
  //       tableStateList: state.TableState.tableStateList,
  //       tableStateSaving: state.TableState.tableStateSaving,
  //       tableStateRemoveLoading: state.TableState.tableStateRemoveLoading,
  //     }));
  //   const isManager = requiredManagePermission(type);
  const canStoreGridSession = true;
  const saveStateIndDbOrSession = 'DB';

  const densityKey = `mrt_density_${type}`;
  const sortingKey = `mrt_sorting_${type}`;
  const columnOrderingKey = `mrt_columnOrdering_${type}`;
  const columnVisibilityKey = `mrt_columnVisibility_${type}`;
  const columnFiltersKey = `mrt_columnFilters_${type}`;
  const globalFilterKey = `mrt_globalFilter_${type}`;
  const paginationKey = `mrt_paging_${type}`;

  const saveTableState = (key, stateValue) => {
    const value = JSON.stringify(stateValue);
    sessionStorage.removeItem(key);
    sessionStorage.setItem(key, value);
  };

  const saveTableStateInDb = () => {
    const keyValuesData = [
      { key: sortingKey, value: sessionStorage.getItem(sortingKey) },
      {
        key: columnOrderingKey,
        value: sessionStorage.getItem(columnOrderingKey),
      },
      {
        key: columnVisibilityKey,
        value: sessionStorage.getItem(columnVisibilityKey),
      },
      {
        key: columnFiltersKey,
        value: sessionStorage.getItem(columnFiltersKey),
      },
      { key: densityKey, value: sessionStorage.getItem(densityKey) },
    ];

    const keyValues = keyValuesData.filter((x) => x.value !== null);
    // if (saveStateIndDbOrSession === 'DB') {
    //   dispatch(addTableState({ keyValues, type }));
    // }
  };

  const getTableStateValue = (key) => {
    return sessionStorage.getItem(key);
  };

  //   const getKeyValue = (key) => {
  //     const obj = tableStateList && tableStateList.find((o) => o.key === key);
  //     if (obj) return obj && JSON.parse(obj.value);
  //     else if (key === columnOrderingKey) return columnOrderInitially;
  //     else if (key === columnVisibilityKey) return columnsVisibleInitially;
  //     return JSON.parse('[]');
  //   };

  //   useEffect(() => {
  //     setDisabledSaveState(tableStateSaving);
  //   }, [tableStateSaving]);

  //   useEffect(() => {
  //     setDisabledClearState(tableStateRemoveLoading);
  //   }, [tableStateRemoveLoading]);

  useEffect(() => {
    if (serverSideSFP) onPagingFunc(pagination);
  }, [pagination]);

  //   useEffect(() => {
  //     if (saveStateIndDbOrSession === 'DB') {
  //       setTimeout(function () {
  //         dispatch(getTableState(type));
  //       }, 1000);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (saveStateIndDbOrSession === 'DB') {
  //       if (getKeyValue(sortingKey).length > 0) {
  //         setSorting(getKeyValue(sortingKey));
  //       }
  //       setColumnOrding(getKeyValue(columnOrderingKey));
  //       setColumnVisibility(getKeyValue(columnVisibilityKey));
  //     }
  //   }, [tableStateList]);

  useEffect(() => {
    if (canStoreGridSession) {
      const columnFilters = getTableStateValue(columnFiltersKey);
      const globalFilter = getTableStateValue(globalFilterKey);
      const pagination = getTableStateValue(paginationKey);
      const columnVisibility = getTableStateValue(columnVisibilityKey);
      const density = getTableStateValue(densityKey);
      const sorting = getTableStateValue(sortingKey);
      const columnOrdering = getTableStateValue(columnOrderingKey);
      if (columnFilters) {
        setColumnFilters(JSON.parse(columnFilters));
      }
      if (globalFilter) {
        setGlobalFilter(JSON.parse(globalFilter));
      }
      if (pagination) {
        setPagination(JSON.parse(pagination));
      }
      if (columnVisibility) {
        setColumnVisibility(JSON.parse(columnVisibility));
      }
      if (sorting) {
        setSorting(JSON.parse(sorting));
      }
      if (columnOrdering) {
        setColumnOrding(JSON.parse(columnOrdering));
      }
    } else {
      resetGridSessionState();
    }
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    if (columnFilters && columnFilters.length > 0) {
      setShowColumnFilters(true);
    } else {
      setShowColumnFilters(false);
    }
    if (isFirstRender.current) return;
    if (canStoreGridSession) saveTableState(columnFiltersKey, columnFilters);
    if (serverSideSFP) {
      const filterValues = columnFilters;
      columnFilterFunc(filterValues);
    }
  }, [columnFilters]);

  useEffect(() => {
    if (globalFilter) {
      setShowGlobalFilter(true);
    } else {
      setShowGlobalFilter(false);
    }
    if (isFirstRender.current) return;
    if (canStoreGridSession)
      saveTableState(globalFilterKey, globalFilter || '');
    if (serverSideSFP) {
      globalFilterFunc(globalFilter);
    }
  }, [globalFilter]);

  useEffect(() => {
    if (isFirstRender.current) return;
    if (canStoreGridSession)
      saveTableState(columnVisibilityKey, columnVisibility);
  }, [columnVisibility]);

  useEffect(() => {
    if (isFirstRender.current) return;
    if (canStoreGridSession) saveTableState(paginationKey, pagination);
  }, [pagination]);

  useEffect(() => {
    if (isFirstRender.current) return;
    if (canStoreGridSession) saveTableState(sortingKey, sorting);
    if (serverSideSFP) {
      const colSorted = sorting;
      colSortFunc(colSorted);
    }
  }, [sorting]);

  useEffect(() => {
    if (isFirstRender.current) return;
    if (canStoreGridSession) saveTableState(columnOrderingKey, columnOrder);
  }, [columnOrder]);

  const getIcons = (name) => {
    if (name === 'Edit') return <Edit />;
    else if (name === 'Details') return <Visibility />;
    else if (name === 'Delete') return <Delete />;
    else if (name === 'Setup') return <Settings />;
    else if (name === 'Approve') return <DoneAll />;
    else if (name === 'Reject') return <Close />;
    return null;
  };

  const getIdColumnKey = () => {
    if (type === 'clinics') return 'clinicId';
    return null;
  };

  const getColumnName = () => {
    if (type === 'clinics') return 'clinicName';
    return null;
  };

  const resetGridSessionState = (table) => {
    table.resetSorting(true);
    table.resetColumnFilters(true);
    table.resetGlobalFilter(true);
    table.resetPagination(true);
    sessionStorage.removeItem(sortingKey);
    sessionStorage.removeItem(columnOrderingKey);
    sessionStorage.removeItem(columnVisibilityKey);
    sessionStorage.removeItem(columnFiltersKey);
    sessionStorage.removeItem(densityKey);
    sessionStorage.removeItem(globalFilterKey);
    sessionStorage.removeItem(paginationKey);
    setDensity('compact');
    setShowColumnFilters(false);
    setSorting([]);
    setColumnVisibility(columnsVisibleInitially);
    setColumnOrding(columnOrderInitially);
    setPagination(pagination);
    // dispatch(removeTableStateDb({ type }));
    table.setShowGlobalFilter(false);
    table.initialState.globalFilter = '';
  };

  const table = useMaterialReactTable({
    displayColumnDefOptions: {
      'mrt-row-actions': {
        muiTableHeadCellProps: {
          align: 'left',
        },
        size: 30,
      },
    },
    columns,
    data: data,
    enablePagination: enablePagination,
    muiTablePaperProps: ({ table }) => ({
      //not sx
      style: {
        zIndex: table.getState().isFullScreen ? 1003 : undefined,
      },
    }),
    enableFullScreenToggle: true,
    filterFn: 'equals',
    globalFilterFn: gblFlterFnc,
    enableRowActions: enableRowActions,
    onGlobalFilterChange: setGlobalFilter,
    autoResetPageIndex: false,
    enableGlobalFilter: true,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onDensityChange: setDensity,
    onShowColumnFiltersChange: setShowColumnFilters,
    onSortingChange: setSorting,
    rowCount: totalRowCount,
    onColumnOrderChange: setColumnOrding,
    onPaginationChange: setPagination,
    enableRowSelection: enableRowSelection,
    onRowSelectionChange: setRowSelection,
    onShowGlobalFilterChange: setShowGlobalFilter,
    getRowId: (originalRow) => originalRow.id,
    enableStickyHeader: enableStickyHeader,
    state: {
      rowSelection: rowSelection,
      columnFilters,
      globalFilter,
      columnVisibility,
      density,
      pagination,
      showColumnFilters,
      sorting,
      columnOrder,
      isLoading: isLoading,
      showSkeletons: isLoading,
      showGlobalFilter: showGlobalFilter,
    },
    editingMode: editingMode, //modal default row, cell, table
    isMultiSortEvent: () => true, //now no need to hold `shift` key to multi-sort
    maxMultiSortColCount: 3, //prevent more than 3 columns from being sorted at once
    initialState: {
      //   sorting: [
      //     { id: 'isActive', desc: true }, //then sort by city in descending order by default
      //     { id: 'supplier', desc: false },
      //   ],
    },
    enableColumnOrdering: true,
    enableEditing: isInlineEdit,
    muiTableBodyCellEditTextFieldProps: muiTableBodyCellEditTextFieldProps,
    renderBottomToolbarCustomActions: renderBottomToolbarCustomActions,
    onEditingRowSave: handleSaveRowEdits,
    onEditingRowCancel: handleCancelRowEdits,
    renderRowActions: renderRowActions,
    enableToolbarInternalActions: enableToolbarInternalActions,
    enableTopToolbar: enableTopToolbar,
    renderRowActionMenuItems: ({ row, closeMenu }) => {
      return [
        customRowActionMenus &&
          customRowActionMenus.map((menu, index) => {
            return (
              <MenuItem
                key={index}
                disabled={false}
                onClick={() => {
                  if (menu.route) {
                    //navigate from here to any page
                    //  navigate(`${menu.route}/${row.original[getIdColumnKey()]}`);
                  } else {
                    //return values from here if have to perform any action
                    menu.modalfunc({
                      id: row.original[getIdColumnKey()],
                      name: row.original[getColumnName()],
                    });
                    closeMenu();
                  }
                }}>
                <Box
                  sx={{ display: 'flex', gap: '0.5rem' }}
                  className=' align-items-center'>
                  <>
                    {getIcons(menu.name)}
                    {menu.name}
                  </>
                </Box>
              </MenuItem>
            );
          }),
      ];
    },
    renderTopToolbarCustomActions: ({ table }) => {
      return (
        <div className='d-flex gap-1 flex-wrap'>
          {topActionButtons &&
            topActionButtons.map((actionBtn, index) => {
              if (actionBtn.name) {
                return (
                  <CustomButton
                    key={index}
                    disabled={!actionBtn.disable ? false : actionBtn.disable}
                    label={actionBtn.name}
                    color='primary'
                    className='p-2'
                    //   onClick={() => {
                    //     if (actionBtn.route) {
                    //       navigate(actionBtn.route);
                    //     } else {
                    //       actionBtn.modalfunc();
                    //     }
                    //   }}
                  />
                );
              } else return <div key={index}></div>;
            })}
        </div>
      );
    },

    renderToolbarInternalActions: ({ table }) => {
      return (
        <Box>
          <MRT_ToggleGlobalFilterButton table={table} disabled={false} />
          <Tooltip title='Save Current View'>
            <IconButton
              disabled={disabledSaveState}
              onClick={() => {
                saveTableStateInDb();
              }}>
              <VisibilityOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title='Clear Stored View'>
            <IconButton
              disabled={disabledClearState}
              onClick={() => {
                resetGridSessionState(table);
              }}>
              <VisibilityOff />
            </IconButton>
          </Tooltip>

          {/* <MRT_ToggleDensePaddingButton table={table} /> */}
          <MRT_ToggleFullScreenButton table={table} />
          <MRT_ShowHideColumnsButton table={table} />
          <MRT_ToggleFiltersButton table={table} />
        </Box>
      );
    },
  });

  return <MaterialReactTable table={table} />;
};

DataTable.defaultProps = defaultProps;

DataTable.propTypes = propTypes;

export default DataTable;
