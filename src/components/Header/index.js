import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import useStyles from './Header.styles';
function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    // target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window: PropTypes.func,
};

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <>
      {/* <CssBaseline /> */}
      <ElevationScroll {...props}>
        <AppBar color='inherit'>
          <Container>
            <Toolbar>
              <Grid container justify='space-between' alignItems='center'>
                <Link href='/'>
                  <Box className={classes.logoBox}>
                    <img src='/images/logo.svg' className={classes.logo} />
                  </Box>
                </Link>

                <Grid item>
                  <Container direction='row'>
                    <Link href='/signin'>
                      <Typography className={classes.link} variant='body2' disabled>
                        sign in
                      </Typography>
                    </Link>
                    <Link href='/works'>
                      <Typography className={classes.link} variant='body2'>
                        works
                      </Typography>
                    </Link>
                    <Link href='/exhibition'>
                      <Typography variant='body2' className={classes.link}>
                        exhibition
                      </Typography>
                    </Link>
                    <Link href='/about'>
                      <Typography variant='body2' className={classes.link}>
                        about us
                      </Typography>
                    </Link>
                    <FontAwesomeIcon icon={faBars} className={classes.link} />
                  </Container>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
