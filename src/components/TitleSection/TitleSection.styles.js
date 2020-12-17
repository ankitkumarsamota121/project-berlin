import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  grid: {
    height: '100%',
  },
  container: {
    maxWidth: '40rem',
    textAlign: 'center',
    margin: '2rem 0',
  },
  title: {
    fontWeight: 800,
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
  },
  description: {
    color: theme.palette.grey[600],
  },
}));
