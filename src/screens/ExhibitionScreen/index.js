import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import useStyles from './ExhibitionScreen.styles';

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
        <Grid container spacing={10}>
          <Grid item md={8}>
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
      </Container>
    </>
  );
}

export default ExhibitionScreen;
