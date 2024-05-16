"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import Title from '@/app/components/Title';
const EditOrganization = () => {
    const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactName, setContactName] = useState('');
    

    return (
        <div style={{ marginLeft: '170px', marginTop: '68px', padding: '20px' }}>
            <Title>Add Organization</Title>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                
                <Grid item xs={12}> {/* Specify the size of each text field */}
                    <TextField
                        margin="dense"
                        id="Description"
                        label="Description"
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="website"
                        label="website"
                        fullWidth
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="contactEmail"
                        label="contact Email"
                        fullWidth
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="contactPhone"
                        label="contact Phone"
                        fullWidth
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="contactName"
                        label="contact Name"
                        fullWidth
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                    />
                </Grid>
                
            </Grid>
            <DialogActions>
                <Link href={'/organization'}>
                    <Button >Cancel</Button>
                </Link>
                <Link href={{pathname:'/organization',
                    
                }} >
                <Button color="primary">
                    Update
                </Button>
                </Link>
            </DialogActions>
        </div>
    );
};

export default EditOrganization;
