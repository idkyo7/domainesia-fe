import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Features from '@/components/Features'
import Promote from './Promote'
import Solution from './Solution'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/fonts/fonts.css" />
    </Head>
    <Header />
    <Carousel />
    <Features />
    <Promote />
    <Solution />
    {/* <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header> */}
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
