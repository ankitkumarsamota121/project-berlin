import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  div: {
    width: '100%',
    overflow: 'hidden',
    padding: '2rem',
    // paddingBottom:
    // height: '100%',
  },
  imageContainer: {
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    borderRadius: '12px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  pagination: {
    // marginTop: theme.spacing(2),
    // '& > *': {
    // },
  },
  button: {
    borderRadius: '12px',
    padding: '0.8rem 3rem',
  },
  bottomGrid: {
    marginTop: '2rem',
  },
}));
