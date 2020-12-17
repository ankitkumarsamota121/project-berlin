import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  button: {
    padding: '1rem 3rem',
    borderRadius: '0.75rem',
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
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },

  aboutContainer: {
    margin: '4rem 0',
    height: '25rem',
  },

  coloredSection: {
    // display: 'block',
    background: theme.palette.secondary.main,
    margin: '2.5rem 0',
  },
  blueSectionGrid: {
    color: theme.palette.common.white,
    padding: '5rem 0',
    // marginTop: '0.5rem',
  },
  imageContainer: {
    width: '100%',
    height: '25rem',
    display: 'flex',
    justifyContent: 'center',
    // overflow: 'hidden',
  },
  image: {
    width: '100%',
    // height: '100%',
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
  headingBlue: {
    color: theme.palette.common.white,
    textTransform: 'uppercase',
  },
  textBlue: {
    color: theme.palette.common.white,
  },
  learnMoreButtonBlue: {
    color: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.white}`,
    borderRadius: '.75rem',
    padding: '1rem 5rem',
    alignSelf: 'flex-end',
  },
}));
