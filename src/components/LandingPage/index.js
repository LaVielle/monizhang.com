import React from 'react'
import SEO from '../seo'
import Layout from '../layout'
import { TitleHeader } from './TitleHeader'

export const LandingPageComponent = () => (
  <Layout>
    <SEO title="Home" />
    <TitleHeader />
  </Layout>
)
