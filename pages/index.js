import Head from 'next/head'
import { ContentSide } from '../components/MiddleContents/contentSide'
import { LeftSide } from '../components/leftSide'
import { RightSide } from '../components/rightSide'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  const { locales } = useRouter();
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Techinika</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className='fixed left-0 h-screen flex items-center justify-center flex-col gap-4 p-1'>
          {locales.map(l => (
          <Link href="/" locale={l} key={l} >
              <p className="p-2 text-white rounded-full bg-blue-900 cursor-pointer">{l}</p>
          </Link>
          ))}
      </div>

      <div className='w-8/12 mt-4 mb-4 flex flex-row mx-auto gap-4 items-start'>
        <LeftSide t={t}/>
        <ContentSide t={t}/>
        <RightSide t={t}/>
      </div>
        
    </>
  )
}
