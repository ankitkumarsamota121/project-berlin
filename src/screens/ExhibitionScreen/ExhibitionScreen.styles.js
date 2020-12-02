import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  grid: {
    height: '60vh',
  },
  container: {
    maxWidth: '35rem',
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
  heading: {
    textTransform: 'capitalize',
  },
  text: {
    maxWidth: '37.5rem',
  },
  image: {
    width: '100%',
  },
}));
