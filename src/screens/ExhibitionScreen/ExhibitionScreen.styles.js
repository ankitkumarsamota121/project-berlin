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
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  text: {
    maxWidth: '37.5rem',
  },
  image: {
    width: '100%',
    // height: 'auto',
    height: '15rem',
  },
  aboutGrid: {
    margin: '5rem 0',
    // height: '15rem',
  },
  textGrid: {
    height: '100%',
  },
  lastExhibition: {
    backgroundImage: `url(/images/image2.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
  },
  lastExhibitionContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  lastExhibitionInfo: {
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    paddingBottom: '1rem',
  },
  lastExhibitionTitle: {
    paddingBottom: '1rem',
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold,
  },
  lastExhibitionText: {
    color: theme.palette.common.white,
    maxWidth: '35rem',
    paddingBottom: '1rem',
  },
  button: {
    background: theme.palette.common.white,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '12px',
    padding: '.5rem 1rem',
  },
  prevContainer: {
    marginTop: '3rem',
    marginBottom: '2rem',
  },
  prevImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  prevHeading: {
    textTransform: 'uppercase',
    marginTop: '1rem',
  },
  prevText: {
    margin: '1rem 0',
  },
  prevLink: {
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '1px',

    '&:hover': {
      textDecoration: 'none',
    },
  },
}));
