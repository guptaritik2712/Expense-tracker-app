import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '0',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      paddingBottom: 0,
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));