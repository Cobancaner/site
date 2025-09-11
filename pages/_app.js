import '../src/index.css';
import { LanguageProvider } from '../src/contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
