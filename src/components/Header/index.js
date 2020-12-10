import React from 'react';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box, Grid, SvgIcon } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Navigation from '../Navigation';

import useStyles from './Header.styles';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar(props) {
  const classes = useStyles();
  const router = useRouter();

  const logoClickHandler = () => {
    if (router.pathname === '/') {
      scroll.scrollToTop();
    } else {
      router.push('/');
    }
  };
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color='inherit'>
          <Container>
            <Toolbar>
              <Grid container justify='space-between' alignItems='center'>
                <Grid item>
                  <Box className={classes.logoBox} onClick={logoClickHandler}>
                    <img src='/images/logo.svg' className={classes.logo} />
                  </Box>
                </Grid>

                <Grid item>
                  <Container className={classes.container}>
                    <Link href='/'>
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
                    <Navigation />
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
