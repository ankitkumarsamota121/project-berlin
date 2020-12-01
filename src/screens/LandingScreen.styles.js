import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  grid: {
    height: '95vh',
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
  button: {
    padding: '1rem 3rem',
    borderRadius: '0.75rem',
  },
  description: {
    color: theme.palette.grey[600],
  },
  scrollButton: {
    fontSize: '0.5rem',
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.grey[600],
    letterSpacing: '10px',
    textTransform: 'capitalize',
    justifySelf: 'end',
    position: 'absolute',
    bottom: '2rem',

    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },
  aboutGrid: {
    margin: '1rem 0',
  },
  imageContainer: {
    width: '50%',
  },
  image: {
    width: '100%',
  },
  descriptionContainer: {
    width: '50%',
  },
  heading: {
    textTransform: 'uppercase',
  },
  text: {
    width: '100%',
  },
  learnMoreButton: {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '.75rem',
    padding: '1rem 1.5rem',
    alignSelf: 'flex-end',
  },
}));
