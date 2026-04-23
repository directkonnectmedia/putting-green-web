import './style.css'

import Head from 'next/head'
import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextIntlProvider
        messages={pageProps?.messages}
        locale={pageProps?.locale}
      >
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </NextIntlProvider>
    </>
  )
}
