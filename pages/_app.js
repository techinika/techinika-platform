import { appWithTranslation } from "next-i18next";
import { NavBar } from "../components/Fixed Components/NavBar";
import { Footer } from '../components/Fixed Components/Footer'
import { useTranslation } from 'next-i18next';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const { t } = useTranslation('common');
  return (
    <>
      <div className='w-full bg-gray-50'>
        <NavBar t={t}/>
        <Component {...pageProps} />
        <Footer t={t}/>
      </div>
    </>
  )
}

export default appWithTranslation(MyApp);
