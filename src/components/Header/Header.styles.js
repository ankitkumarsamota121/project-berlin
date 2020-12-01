import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  logo: {
    // height: '5rem',
    // width: '5rem',
  },
  logoBox: {
    padding: '0.75rem',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme.palette.grey[800],

    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },

    '&:not(:last-child)': {
      marginRight: '3rem',
    },
  },
}));
