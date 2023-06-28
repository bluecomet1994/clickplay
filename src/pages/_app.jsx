import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { AuthProvider } from '@/hooks/rootContext/rootContext';
import Header from '@/layouts/Header/Header';
import { Footer } from '@/layouts/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <main className='AppMain'>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </main>
  )
}
