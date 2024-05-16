"use client"
import Title from '../components/Title';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { field: 'name', headerName: 'Name', width: 100, headerClassName: 'super-app-theme--header' },
  { field: 'description', headerName: 'Description', width: 175, headerClassName: 'super-app-theme--header' },
  { field: 'website', headerName: 'Website', width: 150, headerClassName: 'super-app-theme--header' },
  { field: 'contactEmail', headerName: 'Contact Email', width: 150, headerClassName: 'super-app-theme--header' },
  { field: 'contactPhone', headerName: 'Contact Phone', width: 150, headerClassName: 'super-app-theme--header' },
  { field: 'contactName', headerName: 'Contact Name', width: 150, headerClassName: 'super-app-theme--header' },
  {
    field: 'edit',
    headerName: 'Action',
    width: 130, headerClassName: 'super-app-theme--header',
    renderCell: (params: any) => (
      <Link href={`/organization/edit/${params.id}`}>
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

export default function Organization(params: any) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactName, setContactName] = useState('');
  
  const [showDataGrid, setShowDataGrid] = useState(true);
  const [showForm, setshowForm] = useState(false);
  const [rows, setRows] = useState([
    { "name": "Company A", "description": "Lorem ipsum dolor sit amet", "website": "www.companyA.com", "contactEmail": "contact@companyA.com", "contactPhone": "+1234567890", "contactName": "John Doe" },
    { "name": "Company B", "description": "Consectetur adipiscing elit", "website": "www.companyB.com", "contactEmail": "contact@companyB.com", "contactPhone": "+1987654321", "contactName": "Jane Smith" },
    { "name": "Company C", "description": "Sed do eiusmod tempor incididunt", "website": "www.companyC.com", "contactEmail": "contact@companyC.com", "contactPhone": "+1122334455", "contactName": "Alex Johnson" },
    { "name": "Company D", "description": "Ut labore et dolore magna aliqua", "website": "www.companyD.com", "contactEmail": "contact@companyD.com", "contactPhone": "+1555555555", "contactName": "Emily Davis" }
  ]
  );
  const handleToggleOrganization = () => {
    // const newUser = {
    //   id: rows.length + 1,
    //   firstName: code,
    //   lastName: description,
      
    // };

    // setRows([...rows, newUser]);

    // setCode('');
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
      <Box
        component="main"
        sx={{

          flexGrow: 1,
          height: '100vh',
          overflow: 'auto', marginLeft: '10rem', marginTop: '4rem'
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <Title>Organizations List</Title>
                  </div>
                  <div>
                    <Link href={'/organization/add'}>
                      <Button variant="contained" color="primary" startIcon={<AddIcon />} style={{
                        backgroundColor: 'rgb(238, 119, 34)',
                        color: 'rgb(20, 20, 20)',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px'
                      }}  >
                        Add Organization
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
        </Container>
      </Box>

    </>
  );
}
