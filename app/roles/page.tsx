"use client"
import Title from '../components/Title';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { field: 'code', headerName: 'Code', width: 400, headerClassName: 'super-app-theme--header' },
  { field: 'description', headerName: 'Description', width: 500, headerClassName: 'super-app-theme--header' },
  {
    field: 'edit',
    headerName: 'Action',
    width: 130, headerClassName: 'super-app-theme--header',
    renderCell: (params: any) => (
      <Link href={`/roles/edit/${params.id}`}>
        <EditIcon />
      </Link>
    ),
  },
  {
    field: 'delete',
    headerName: '',headerClassName: 'super-app-theme--header',
    width: 100,
    renderCell: (params: any) => (
      <Link href={``}>
        <GridDeleteIcon />
      </Link>
    ),
  },
];

export default function Users(params: any) {
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  
  const [showDataGrid, setShowDataGrid] = useState(true);
  const [showForm, setshowForm] = useState(false);
  const [rows, setRows] = useState([
    { id: 1, code: 'ABC123', description: 'Lorem ipsum dolor sit amet', },
  { id: 2, code: 'DEF456', description: 'Consectetur adipiscing elit', },
  { id: 3, code: 'GHI789', description: 'Sed do eiusmod tempor incididunt', },


  ]
  );
  const handleToggleOrganization = () => {
    const newUser = {
      id: rows.length + 1,
      firstName: code,
      lastName: description,
      
    };

    // setRows([...rows, newUser]);

    setCode('');
    setDescription('');
    

    setShowDataGrid(!showDataGrid); // Toggle the visibility of DataGrid
    setshowForm(!showForm);
  }
  
  function generateRandom() {
    var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  return (
    <>
      <div style={{marginLeft:'4rem'}}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <Title>Roles</Title>
                  </div>
                  <div>
                    <Link href={'/roles/add'}>
                      <Button variant="contained" color="primary" startIcon={<AddIcon />} style={{
                        backgroundColor: 'rgb(238, 119, 34)',
                        color: 'rgb(20, 20, 20)',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px'
                      }}  >
                        Add Role
                      </Button>
                    </Link>

                  </div>
                </div>
                
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} getRowId={(row: any) => generateRandom()} sx={{
                      '& .super-app-theme--header': {
                        backgroundColor: '#D5D4D4',
                        color: 'black'
                      },
                    }} />
                  </div>
                
                  
                
                

              </Paper>
            </Grid>
          </Grid>
          </div>

    </>
  );
}
