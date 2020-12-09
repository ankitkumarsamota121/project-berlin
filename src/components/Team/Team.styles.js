import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  teamContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingTop: '4rem',
  },
  listGrid: {
    // marginLeft: '-1rem',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',

    '&::-webkit-scrollbar': {
      height: '.2rem',
    },

    ' &::-webkit-scrollbar-track': {
      // boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  teamTitle: {
    fontWeight: 600,
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  teamTitleContainer: {
    background: theme.palette.common.white,
    padding: '0.5rem 0',
    width: '100%',
    zIndex: '10',
  },
  tile: {
    height: '20rem',
    width: '20rem',
    borderRight: `1px solid ${theme.palette.common.white}`,
  },
}));
