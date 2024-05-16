"use client"

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import Link from 'next/link';
import Title from '@/app/components/Title';
const EditRole = (params:any) => {
    console.log(params.params.id);
    
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    
  return (
    <div style={{ marginLeft: '170px', marginTop: '68px', padding: '20px' }}> {/* Adjust margin to match sidebar width and marginTop to match header height */}
            <Title>Edit User</Title>
            <Grid container spacing={2}> {/* Use Grid container to wrap the text fields */}
                <Grid item xs={12}> 
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Code"
                        label="Code"
                        fullWidth
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}> {/* Specify the size of each text field */}
                    <TextField
                        margin="dense"
                        id="desctiption"
                        label="description"
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Grid>
                
            </Grid>
            <DialogActions>
                <Link href={'/roles'}>

                    <Button >Cancel</Button>
                </Link>
                <Button color="primary" href={'/roles'}>
                    Update
                </Button>
            </DialogActions>
        </div>
  )
}

export default EditRole