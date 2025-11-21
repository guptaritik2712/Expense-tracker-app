//rafce
import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <div style={{ 
            height: '100vh', 
            overflow: 'hidden', 
            display: 'flex', 
            flexDirection: 'column',
            background: '#f5f5f5',
            position: 'relative'
        }}>
            
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ 
                flex: 1, 
                overflow: 'hidden', 
                padding: '15px',
                position: 'relative',
                zIndex: 1
            }}>
                <Grid item xs={12} sm={3} className={classes.mobile}>
                    <Details title="Income" />
                </Grid>
                {/* <Grid item xs={12} sm={5} ref={main} className={classes.main}>
                    <Main />
                </Grid> */}
                <Grid item xs={12} sm={5} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.desktop}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
