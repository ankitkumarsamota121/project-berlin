import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  grid: {
    height: '60vh',
  },
  container: {
    maxWidth: '40rem',
    textAlign: 'center',
    margin: '2rem 0',
  },
  title: {
    fontWeight: 800,
    color: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.grey[600],
  },
  image: {
    maxWidth: '100%',
  },
  greenSection: {
    backgroundColor: '#4ddc74',
    padding: '3rem 0',
  },
  greenContainer: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  whiteHeading: {
    color: theme.palette.common.white,
  },
  whiteText: {
    color: theme.palette.common.white,
  },
}));
