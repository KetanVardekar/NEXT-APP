"use client"

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import Link from 'next/link';
import Title from '@/app/components/Title';
const page = (params:any) => {
    console.log(params.params.id);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [isActive, setIsActive] = useState('');
    const [roles, setRoles] = useState('');
  return (
    <div style={{ marginLeft: '170px', marginTop: '68px', padding: '20px' }}> {/* Adjust margin to match sidebar width and marginTop to match header height */}
            <Title>Edit User</Title>
            <Grid container spacing={2}> {/* Use Grid container to wrap the text fields */}
                <Grid item xs={6}> {/* Specify the size of each text field */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}> {/* Specify the size of each text field */}
                    <TextField
                        margin="dense"
                        id="lastName"
                        label="Last Name"
                        fullWidth
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                {/* Repeat the above pattern for other pairs of text fields */}
                <Grid item xs={6}>
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Phone"
                        fullWidth
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="dense"
                        id="roles"
                        label="Roles"
                        fullWidth
                        value={roles}
                        onChange={(e) => setRoles(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="dense"
                        id="organization"
                        label="Organization"
                        fullWidth
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                    />
                </Grid>
            </Grid>
            <DialogActions>
                <Link href={'/users'}>

                    <Button >Cancel</Button>
                </Link>
                <Button color="primary">
                    Update
                </Button>
            </DialogActions>
        </div>
  )
}

export default page