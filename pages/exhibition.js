import { makeStyles } from '@material-ui/core';
import ExhibitionScreen from '../src/screens/ExhibitionScreen';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <ExhibitionScreen />
      <Footer />
    </>
  );
}
