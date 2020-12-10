import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import MenuToggle from './MenuToggle';
import NavList from './NavList';

import useStyles from './Navigation.styles';

const navigation = {
  open: (scale = 300) => ({
    scale: scale,
    transition: {
      duration: 0.5,
    },
  }),
  closed: {
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Navigation = () => {
  const classes = useStyles();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { height, width } = useWindowDimensions();
  const scale = Math.max(height, width);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={scale}
      // ref={containerRef}
      className={classes.div}
    >
      <motion.div className={classes.background} variants={navigation} />
      <div>
        <NavList />
      </div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

export default Navigation;
