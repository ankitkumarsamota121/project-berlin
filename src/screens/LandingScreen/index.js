import { useEffect } from 'react';
import { Grid, Container, Typography, Button, Box } from '@material-ui/core';
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import useStyles from './LandingScreen.styles';
import TitleSection from '../../components/TitleSection';

export default function LandingScreen() {
  const classes = useStyles();

  return (
    <>
      <TitleSection
        height='95vh'
        title='Welcome to Design Tab'
        description='We are small design community in NITRKL which provides a platform to young design
            enthusiast of NIT to bring out their creativity to create amazing works'
      >
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
      </TitleSection>

      {/* ABOUT SECTION */}
      {/* <section id='about-section'> */}
      <Container>
        <Grid container justify='space-between' className={classes.aboutContainer}>
          <Grid container item md={6} className={classes.descriptionContainer}>
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
          <Grid item md={6}>
            <div className={classes.imageContainer}>
              <img src='/images/img1.jpg' className={classes.image} />
            </div>
          </Grid>
        </Grid>

        <Grid container justify='space-between' className={classes.aboutContainer}>
          <Grid item md={6} className={classes.imageContainer}>
            <div className={classes.imageContainer}>
              <img src='/images/img2.jpg' className={classes.image} />
            </div>
          </Grid>
          <Grid container item md={6} className={classes.descriptionContainer}>
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

        <Grid container justify='space-between' className={classes.aboutContainer}>
          <Grid container item md={6} className={classes.descriptionContainer}>
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
          <Grid item md={6} className={classes.imageContainer}>
            <div className={classes.imageContainer}>
              <img src='/images/img3.jpg' className={classes.image} />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* </section> */}

      {/* BLUE SECTION */}
      <section id='blue-section' className={classes.coloredSection}>
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
