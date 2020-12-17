import React, { useEffect } from 'react';
import { Grid, Typography, Button, Paper, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-scroll';
import TabPanel from '../../components/TabPanel';
import useStyles from './WorksScreen.styles';
import TitleSection from '../../components/TitleSection';

function WorksScreen() {
  const classes = useStyles();
  const [value, setValue] = React.useState('all');

  useEffect(() => {}, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TitleSection
        title='Our Works'
        description='Our club has people with diverse interest in diffrent design fields like Graphic design,
            Product design, UI/UX design, 3D modeling, Fine arts and more.'
      />
      <Paper className={classes.tabsPaper}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
          // className={classes.tabs}
        >
          <Tab className={classes.tab} value='all' label='All' />
          <Tab className={classes.tab} value='print' label='Print Works' />
          <Tab className={classes.tab} value='illustrations' label='Illustrations' />
          <Tab className={classes.tab} value='digital' label='Digital Paintings' />
          <Tab className={classes.tab} value='type' label='Type Works' />
          <Tab className={classes.tab} value='product' label='Product' />
          <Tab className={classes.tab} value='3d' label='3D' />
          <Tab className={classes.tab} value='arvr' label='AR/VR' />
          <Tab className={classes.tab} value='fineArts' label='Fine Arts' />
        </Tabs>
      </Paper>
      <TabPanel value={value} index='all' />
      <TabPanel value={value} index='print' />
      <TabPanel value={value} index='illustrations' />
      <TabPanel value={value} index='digital' />
      <TabPanel value={value} index='type' />
      <TabPanel value={value} index='product' />
      <TabPanel value={value} index='3d' />
      <TabPanel value={value} index='arvr' />
      <TabPanel value={value} index='fineArts' />
    </>
  );
}

export default WorksScreen;
