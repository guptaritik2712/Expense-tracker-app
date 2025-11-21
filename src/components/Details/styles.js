import {makeStyles} from '@material-ui/core';

export default makeStyles(()=>({
    income:{
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '2px solid rgba(76, 175, 80, 0.3)',
        borderTop: '8px solid #4caf50',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)'
        }
    },
    expense:{
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '2px solid rgba(244, 67, 54, 0.3)',
        borderTop: '8px solid #f44336',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)'
        }
    }
}))