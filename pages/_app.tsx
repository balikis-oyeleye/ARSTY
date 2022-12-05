import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'
import { useState } from 'react'
import Mobile from '../components/layout/Mobile'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <Mobile setToggle={setToggle} toggle={toggle} />
      <Header setToggle={setToggle} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
