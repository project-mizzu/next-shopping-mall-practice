import '@/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Top from '@/src/component/Top';
import Footer from '@/src/component/Footer';

export default function App({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: '0 auto' }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
