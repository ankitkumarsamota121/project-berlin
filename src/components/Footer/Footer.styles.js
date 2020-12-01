import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    height: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  footer: {
    height: '10rem',
    overflow: 'hidden',
    padding: '0 1rem',
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
  logo: {
    margin: '.25rem',
    color: theme.palette.grey[700],
  },
  logoText: {
    color: theme.palette.grey[700],
  },
  findUs: {
    textAlign: 'center',
    color: theme.palette.grey[500],
  },
  copyrightText: {
    textAlign: 'center',
    color: theme.palette.grey[500],
  },
}));
