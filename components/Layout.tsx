import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Person } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import Header from '@/components/Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/fonts/fonts.css" />

        <script
        {...jsonLdScriptProps<Person>({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Grace Hopper",
          alternateName: "Grace Brewster Murray Hopper",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: ["Yale University", "Vassar College"],
          },
          knowsAbout: ["Compilers", "Computer Science"],
        })}
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  </>
)

export default Layout
