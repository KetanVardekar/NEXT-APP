import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'shipTo', headerName: 'Address', width: 300 },
  { field: 'paymentMethod', headerName: 'Payment Method', width: 200 },
  { field: 'amount', headerName: 'Sale Amount', width: 150 },
];

const rows = [
  { id: 1, date: '2024-05-15', name: 'John Doe', shipTo: '123 Main St, Anytown, USA', paymentMethod: 'Credit Card', amount: 100 },
  { id: 2, date: '2024-05-16', name: 'Jane Smith', shipTo: '456 Oak Ave, Sometown, USA', paymentMethod: 'PayPal', amount: 150 },
  { id: 3, date: '2024-05-17', name: 'Bob Johnson', shipTo: '789 Elm St, Othertown, USA', paymentMethod: 'Cash', amount: 80 },

];

const UserTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        
      />
    </div>
  );
};

export default UserTable;
