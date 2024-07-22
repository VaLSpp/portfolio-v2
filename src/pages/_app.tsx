// pages/_app.js (atau _app.tsx)

import Layouts from '@/components/layouts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Head>
        {/* Penghubungan ikon favicon sekarang ditempatkan di sini */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layouts>
  )
}
