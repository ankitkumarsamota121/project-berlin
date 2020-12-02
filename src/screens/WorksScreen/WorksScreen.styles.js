import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  grid: {
    height: '60vh',
  },
  container: {
    maxWidth: '37.5rem',
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
  tabsPaper: {
    boxShadow: `0 2px 4px ${fade(theme.palette.common.black, 0.2)}`,
  },
  tabs: {
    textTransform: 'capitalize',
  },
  tab: {
    textTransform: 'capitalize',
  },
}));
