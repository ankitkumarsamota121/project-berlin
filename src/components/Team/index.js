import React from 'react';
import { GridList, Grid, GridListTile, GridListTileBar } from '@material-ui/core';
import tileData from './tileData';

import useStyles from './Team.styles';
import { Typography } from '@material-ui/core';

const Team = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.teamContainer} alignItems='center'>
      <Grid item container md={3} justify='center' className={classes.teamTitleContainer}>
        <div className={classes.teamTitleContainer}>
          <Typography variant='h3' className={classes.teamTitle}>
            {title}
          </Typography>
        </div>
      </Grid>
      <Grid item md={9} className={classes.listGrid}>
        <GridList
          className={classes.gridList}
          cols={2.5}
          style={{ margin: '0', marginLeft: '-2rem' }}
        >
          {tileData.map((tile, index) => (
            <GridListTile
              key={index}
              className={classes.tile}
              style={{ height: '20rem', overflow: 'hidden', margin: '0', padding: '0' }}
            >
              <img src={tile.img} alt={tile.title} className={classes.image} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
};

export default Team;
