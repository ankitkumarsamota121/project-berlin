import { useEffect } from 'react';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import useStyles from './LandingScreen.styles';

export default function LandingScreen() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.grid}
      >
        <Typography variant='h1' className={classes.title}>
          Welcome to Design Tab
        </Typography>
        <Grid item container direction='column' fluid='true' className={classes.container}>
          <Typography variant='body1' className={classes.description}>
            We are small design community in NITRKL which provides a platform to young design
            enthusiast of NIT to bring out their creativity to create amazing works
          </Typography>
        </Grid>
        <Button variant='contained' color='primary' className={classes.button}>
          Join Us
        </Button>

        <Link
          to='about-section'
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={classes.scrollButton}
        >
          <Typography variant='body2'>
            Scroll Down <FontAwesomeIcon icon={faArrowDown} />
          </Typography>
        </Link>
      </Grid>

      {/* ABOUT SECTION */}
      <section id='about-section'>
        <Container>
          <Grid container justify='space-between' spacing={10} className={classes.aboutGrid}>
            <Grid container item className={classes.descriptionContainer}>
              <Typography variant='h5' className={classes.heading}>
                Our area of expertise
              </Typography>
              <Typography variant='body1' className={classes.text}>
                It was all started in 2013 when te co-founders of the club had this amazing idea of
                presentiing clubs work to the world to inspire people and to improve club memebers
                skills. Since then this exhibition is carried out every year with same passion and
                love.
              </Typography>
              <Button className={classes.learnMoreButton}>See All Our Works</Button>
            </Grid>
            <Grid item className={classes.imageContainer}>
              <img src='/images/image.png' className={classes.image} />
            </Grid>
          </Grid>
          <Grid container justify='space-between' spacing={10} className={classes.aboutGrid}>
            <Grid item className={classes.imageContainer}>
              <img src='/images/image.png' className={classes.image} />
            </Grid>
            <Grid container item className={classes.descriptionContainer}>
              <Typography variant='h5' className={classes.heading}>
                Our annual exhibition
              </Typography>
              <Typography variant='body1' className={classes.text}>
                It was all started in 2013 when te co-founders of the club had this amazing idea of
                presentiing clubs work to the world to inspire people and to improve club memebers
                skills. Since then this exhibition is carried out every year with same passion and
                love.
              </Typography>
              <Button className={classes.learnMoreButton}>See All Our Works</Button>
            </Grid>
          </Grid>
          <Grid container justify='space-between' spacing={10} className={classes.aboutGrid}>
            <Grid container item className={classes.descriptionContainer}>
              <Typography variant='h5' className={classes.heading}>
                Learning Resources
              </Typography>
              <Typography variant='body1' className={classes.text}>
                It was all started in 2013 when te co-founders of the club had this amazing idea of
                presentiing clubs work to the world to inspire people and to improve club memebers
                skills. Since then this exhibition is carried out every year with same passion and
                love.
              </Typography>
              <Button className={classes.learnMoreButton}>Explore Now</Button>
            </Grid>
            <Grid item className={classes.imageContainer}>
              <img src='/images/image.png' className={classes.image} />
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* BLUE SECTION */}
      <section id='blue-section' className={classes.blueSection}>
        <Container>
          <Grid container justify='space-between' spacing={10} className={classes.blueSectionGrid}>
            <Grid item className={classes.imageContainer}>
              <img src='/images/image.png' className={classes.image} />
            </Grid>
            <Grid container item className={classes.descriptionContainer}>
              <Typography variant='h5' className={classes.headingBlue}>
                We are design mad
              </Typography>
              <Typography variant='body1' className={classes.textBlue}>
                It was all started in 2013 when te co-founders of the club had this amazing idea of
                presentiing clubs work to the world to inspire people and to improve club memebers
                skills. Since then this exhibition is carried out every year with same passion and
                love.
              </Typography>
              <Button className={classes.learnMoreButtonBlue}>Know more about us</Button>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
