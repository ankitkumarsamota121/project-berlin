import React from 'react';
import { Grid, Typography, Container, Button, Link } from '@material-ui/core';

import useStyles from './TitleSection.styles';

const TitleSection = ({ height, title, description, children }) => {
  const classes = useStyles();

  return (
    <Container style={{ height: height }}>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.grid}
      >
        <Typography variant='h1' className={classes.title}>
          {title}
        </Typography>
        <Grid item container direction='column' fluid='true' className={classes.container}>
          <Typography variant='body1' className={classes.description}>
            {description}
          </Typography>
        </Grid>
        {children}
      </Grid>
    </Container>
  );
};

TitleSection.defaultProps = {
  height: '75vh',
  title: 'Title',
  description: 'Here Comes the Description',
};

export default TitleSection;
