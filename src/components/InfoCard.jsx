import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2.5),
    borderRadius: 15,
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
    border: '2px solid rgba(102, 126, 234, 0.2)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
    }
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.spacing(2),
    '& svg': {
      fontSize: 35,
      color: '#667eea',
      opacity: 0.8,
      transition: 'all 0.3s ease',
      '&:hover': {
        opacity: 1,
        transform: 'scale(1.2) rotate(10deg)'
      }
    }
  }
}));

const InfoCard = () => {
  const classes = useStyles();
  
  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography variant="h6" align="center" style={{ color: '#667eea', fontWeight: 700, marginBottom: '8px' }}>
        🚀 Quick Start Guide
      </Typography>
      <Typography variant="body2" align="center" style={{ color: '#555', lineHeight: 1.7, fontSize: '0.9rem' }}>
        Add transactions below to track your finances and visualize spending patterns
      </Typography>
      <Box className={classes.iconRow}>
        <TrendingUpIcon />
        <AccountBalanceWalletIcon />
        <ShowChartIcon />
      </Box>
    </Paper>
  );
};

export default InfoCard;