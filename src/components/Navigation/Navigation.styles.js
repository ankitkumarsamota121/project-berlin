import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  div: {
    display: 'inline-block',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    height: '1rem',
    width: '1rem',
    background: theme.palette.secondary.main,
    borderRadius: '50%',
  },
  button: {
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    padding: '0',
    height: '100%',
    borderRadius: '50%',
    background: 'transparent',
    zIndex: 1000,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navListDiv: {
    // width: '100vw',
    // height: '100vh',
  },
}));
