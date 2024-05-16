"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import Title from '@/app/components/Title';
const AddRole = () => {
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    

    return (
        <div style={{ marginLeft: '170px', marginTop: '68px', padding: '20px' }}>
            <Title>Add Role</Title>
            <Grid container spacing={2}>
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
                        id="Description"
                        label="Description"
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
                <Link href={{pathname:'/roles',
                    
                }} >
                <Button color="primary">
                    Save
                </Button>
                </Link>
            </DialogActions>
        </div>
    );
};

export default AddRole;
