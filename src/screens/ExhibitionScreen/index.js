import React from 'react';
import { Grid, Typography, Container, Button, Link } from '@material-ui/core';
import useStyles from './ExhibitionScreen.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ExhibitionScreen() {
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
          IRIDESCENCE
        </Typography>
        <Grid item container direction='column' fluid='true' className={classes.container}>
          <Typography variant='body1' className={classes.description}>
            Design Tab’s annual design exhibition oraganised for two days during annual technical
            fest INNOVISSION
          </Typography>
        </Grid>
      </Grid>

      <Container>
        <Grid container className={classes.aboutGrid} alignItems='center'>
          <Grid
            item
            container
            md={8}
            justify='space-between'
            className={classes.textGrid}
            direction='column'
          >
            <Typography variant='h5' className={classes.heading}>
              Why is iridescence?
            </Typography>
            <Typography variant='body1' className={classes.text}>
              It was all started in 2013 when te co-founders of the club had this amazing idea of
              presentiing clubs work to the world to inspire people and to improve club memebers
              skills. Since then this exhibition is carried out every year with same passion and
              love.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src='/images/image.png' className={classes.image} />
          </Grid>
        </Grid>
        <Grid container className={classes.aboutGrid} alignItems='center'>
          <Grid item container md={8} alignItems='stretch' className={classes.textGrid}>
            <Typography variant='h5' className={classes.heading}>
              What we exhibit in the exhibition?
            </Typography>
            <Typography variant='body1' className={classes.text}>
              Mostly our work exhibited in the exhibition are related to garphic design, product
              design, AR/VR, fine arts etc. Every year we try to brng some thing new for the
              audience like AR games and much more.
            </Typography>
          </Grid>
          <Grid item md={4} className={classes.imageContainer}>
            <img src='/images/image.jpg' className={classes.image} />
          </Grid>
        </Grid>
      </Container>

      <div className={classes.lastExhibition}>
        <Container className={classes.lastExhibitionContainer}>
          <Typography variant='h6' className={classes.lastExhibitionInfo}>
            Previous year iridescence
          </Typography>
          <Typography variant='h1' className={classes.lastExhibitionTitle}>
            Iridescence 2018
          </Typography>
          <Typography variant='h6' className={classes.lastExhibitionText}>
            Iridescence is a annual design exhibition oraganised by design tab. This is one of the
            biggest attraction of the fest
          </Typography>
          <Button color='primary' className={classes.button}>
            View Our Work
          </Button>
        </Container>
      </div>

      <Container className={classes.prevContainer}>
        <Grid container spacing={10}>
          <Grid item md={6}>
            <img src='/images/image.png' className={classes.prevImage} />
            <Typography variant='h5' className={classes.prevHeading}>
              Iridescence 2017
            </Typography>
            <Typography variant='body1' className={classes.prevText}>
              Iridescence is a annual design exhibition oraganised by design tab. This is one of the
              biggest attraction of the fest
            </Typography>
            <Link className={classes.prevLink}>
              View Our Work <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </Grid>
          <Grid item md={6}>
            <img src='/images/image.png' className={classes.prevImage} />
            <Typography variant='h5' className={classes.prevHeading}>
              Iridescence 2016
            </Typography>
            <Typography variant='body1' className={classes.prevText}>
              Iridescence is a annual design exhibition oraganised by design tab. This is one of the
              biggest attraction of the fest
            </Typography>
            <Link className={classes.prevLink}>
              View Our Work <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ExhibitionScreen;
