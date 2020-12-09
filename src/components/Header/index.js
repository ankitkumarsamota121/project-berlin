import React from 'react';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box, Grid, SvgIcon } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation';

import useStyles from './Header.styles';
import styles from './navigation.module.scss';

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
                <Box className={classes.logoBox} onClick={logoClickHandler}>
                  <img src='/images/logo.svg' className={classes.logo} />
                </Box>

                <Grid item>
                  <Container direction='row'>
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
                    {/* <FontAwesomeIcon icon={faBars} className={classes.link} /> */}
                    {/* <div className={styles.navigation}>
                      <input
                        type='checkbox'
                        className={styles.navigation__checkbox}
                        id='navi-toggle'
                      />

                      <label htmlFor='navi-toggle' className={styles.navigation__button}>
                        <span className={styles.navigation__icon}>&nbsp;</span>
                      </label>

                      <div className={styles.navigation__background}>&nbsp;</div>

                      <nav className={styles.navigation__nav}>
                        <ul className={styles.navigation__list}>
                          <li className={styles.navigation__item}>
                            <a href='#' className={styles.navigation__link}>
                              <span>01</span>Works
                            </a>
                          </li>
                          <li className={styles.navigation__item}>
                            <a href='#' className={styles.navigation__link}>
                              <span>02</span>Exhibition
                            </a>
                          </li>
                          <li className={styles.navigation__item}>
                            <a href='#' className={styles.navigation__link}>
                              <span>03</span>About Us
                            </a>
                          </li>
                          <li className={styles.navigation__item}>
                            <a href='#' className={styles.navigation__link}>
                              <span>04</span>Resources
                            </a>
                          </li>
                          <li className={styles.navigation__item}>
                            <a href='#' className={styles.navigation__link}>
                              <span>05</span>Contact Us
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
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
