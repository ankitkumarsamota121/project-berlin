import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  div: {
    width: '100%',
    overflow: 'hidden',
    padding: '2rem',
    // paddingBottom:
    // height: '100%',
  },
  image: {
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: '4px',
    borderRadius: '12px',
    width: '100%',
    height: '100%',
  },
  pagination: {
    // '& > *': {
    //   marginTop: theme.spacing(2),
    // },
  },
  button: {
    borderRadius: '12px',
    padding: '0.8rem 3rem',
  },
  bottomGrid: {
    marginTop: '1rem',
  },
}));
