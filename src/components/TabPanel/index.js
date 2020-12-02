import { useState } from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import PropTypes from 'prop-types';
import useStyles from './TabPanel.styles';

export default function TabPanel(props) {
  const classes = useStyles();
  const { value, index, ...other } = props;

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div
      // p={4}
      className={classes.div}
      role='tabpanel'
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Grid container className={classes.grid} spacing={4} justify='center'>
          {[...Array(12).keys()].map((val) => (
            <Grid item md={3} key={val}>
              <div className={classes.imageContainer}>
                <img src='/images/image.png' className={classes.image} />
              </div>
            </Grid>
          ))}
        </Grid>
      )}

      <Grid container alignItems='center' justify='space-between' className={classes.bottomGrid}>
        {/* <Grid item> */}
        <Pagination
          count={5}
          color='primary'
          shape='rounded'
          size='large'
          onChange={handlePageChange}
          className={classes.pagination}
        />
        {/* </Grid> */}
        <Button variant='contained' color='primary' className={classes.button}>
          Load More
        </Button>
      </Grid>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
