import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider, Box } from '@material-ui/core'

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

import { ExpenseTrackerContext } from '../../context/context'
import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root} style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            overflow: 'auto',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <CardHeader 
                title="Expense Tracker" 
                subheader="Manage your finances with ease and clarity"
                titleTypographyProps={{ 
                    variant: 'h4', 
                    style: { 
                        fontWeight: 800,
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    } 
                }}
                subheaderTypographyProps={{ 
                    style: { 
                        color: '#666', 
                        textAlign: 'center',
                        marginTop: 8,
                        fontSize: '0.95rem',
                        fontWeight: 500
                    } 
                }}
                style={{ paddingBottom: '10px' }}
            />
            <CardContent style={{ paddingTop: 0 }}>
                <Box style={{
                    background: balance >= 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: '15px',
                    padding: '20px',
                    marginBottom: '20px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <Typography variant="body2" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', fontWeight: 500, marginBottom: '5px' }}>
                        Total Balance
                    </Typography>
                    <Typography variant="h3" style={{ fontWeight: 800, color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                        ₹{balance.toLocaleString('en-IN')}
                    </Typography>
                </Box>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider}/>
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <List />
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default Main
