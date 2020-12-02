import React from 'react';
import { Grid, Typography, Container, Button, Link } from '@material-ui/core';
import useStyles from './About.styles';

function AboutScreen() {
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
          We Are Design Mads
        </Typography>
        <Grid item container direction='column' fluid='true' className={classes.container}>
          <Typography variant='body1' className={classes.description}>
            It's not just a name but an identity of all the design enthusiats and creative minds who
            think of something new, something out of the box. Born in 2013, in National Institute of
            Technology, Rourkela, DesignTab has evolved not only as a club but a mentor for all
            those young, upcoming designers.
          </Typography>
        </Grid>
      </Grid>

      <section className={classes.greenSection}>
        <Container className={classes.greenContainer}>
          <Grid container spacing={10}>
            <Grid item md={6}>
              <img src='/images/image.png' className={classes.image} />
            </Grid>
            <Grid item md={6} container>
              <Typography variant='h5' className={classes.whiteHeading}>
                Our Goal
              </Typography>
              <Typography variant='body1' className={classes.whiteText}>
                It's not just a name but an identity of all the design enthusiats and creative minds
                who think of something new, something out of the box. Born in 2013, in National
                Institute of Technology, Rourkela, DesignTab has evolved not only as a club but a
                mentor for all those young, upcoming designers.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default AboutScreen;
