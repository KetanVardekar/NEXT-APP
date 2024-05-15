"use client"
import Title from '../components/Title';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Link from 'next/link';

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 200 },
  { field: 'lastName', headerName: 'Last Name', width: 100 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'isActive', headerName: 'IsActive', width: 80 },
  { field: 'roles', headerName: 'Roles', width: 150 },
  { field: 'organization', headerName: 'Organization', width: 350 },
];

export default function Users() {
  const [open, setOpen] = useState(false);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [organization, setorganization] = useState('');
  const [isActive, setisActive] = useState('');
  const [roles, setroles] = useState('');
  const [showDataGrid, setShowDataGrid] = useState(true);
  const [showForm, setshowForm] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      isActive: true,
      roles: "Admin",
      organization: "XYZ Corporation"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      isActive: true,
      roles: "User",
      organization: "ABC Company"
    },


  ]
  );
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleUser = () => {
    const newUser = {
      id: rows.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      isActive: true,
      roles: roles,
      organization: organization
    };

    setRows([...rows, newUser]);

    setfirstName('');
    setlastName('');
    setphone('');
    setorganization('');
    setroles('');
    setemail('');

    setShowDataGrid(!showDataGrid); // Toggle the visibility of DataGrid
    setshowForm(!showForm);
  }
  const handleAddUser = () => {
    const newUser = {
      id: rows.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      isActive: true,
      roles: roles,
      organization: organization
    };

    setRows([...rows, newUser]);

    setfirstName('');
    setlastName('');
    setphone('');
    setorganization('');
    setroles('');
    setemail('');

    handleClose();

  };

  const handleToggleDataGrid = () => {
    setShowDataGrid(!showDataGrid); // Toggle the visibility of DataGrid
    setshowForm(!showForm);// Toggle the visibility of DataGrid
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
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
                    <Title>Users</Title>
                  </div>
                  <div>

                    <Button variant="contained" color="primary" onClick={handleToggleDataGrid}>
                      Toggle User
                    </Button>
                    &nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={handleOpen}>
                      Add User
                    </Button>
                  </div>
                </div>
                {showDataGrid ? (
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} />
                  </div>
                ) : (
                  showForm && (
                    <>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="lastName"
                        label="lastName"
                        fullWidth
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="email"
                        label="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="phone"
                        label="phone"
                        fullWidth
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="roles"
                        label="roles"
                        fullWidth
                        value={roles}
                        onChange={(e) => setroles(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="organization"
                        label="organization"
                        fullWidth
                        value={organization}
                        onChange={(e) => setorganization(e.target.value)}
                      />
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleToggleUser} color="primary">
                          Add
                        </Button>
                      </DialogActions>
                    </>
                  )
                )}
                {/* <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                  />
                </div> */}

              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="lastName"
            fullWidth
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="email"
            fullWidth
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="phone"
            label="phone"
            fullWidth
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          <TextField
            margin="dense"
            id="roles"
            label="roles"
            fullWidth
            value={roles}
            onChange={(e) => setroles(e.target.value)}
          />
          <TextField
            margin="dense"
            id="organization"
            label="organization"
            fullWidth
            value={organization}
            onChange={(e) => setorganization(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddUser} color="primary">Add</Button>
        </DialogActions>
      </Dialog>


    </>
  );
}
