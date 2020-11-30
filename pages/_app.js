import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from '../src/redux/Root';

function App({ Component, pageProps }) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default App;
