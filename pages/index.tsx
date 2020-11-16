import Link from 'next/link'
import Layout from '@/components/Layout'
import Carousel from '@/components/Carousel'
import Features from '@/components/Features'
import Promote from '@/components/Promote'
import Solution from '@/components/Solution'
import Hosting from '@/components/Hosting'
import Support from '@/components/Support'
import Guarantee from '@/components/Guarantee'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Carousel />
    <Features />
    <Promote />
    <Solution />
    <Support />
    <Hosting />
    <Guarantee />
  </Layout>
)

export default IndexPage
