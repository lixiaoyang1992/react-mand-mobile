import React from 'react'
import { Link } from 'gatsby'
import './style.less'
import '../../lib/style.less'
import { Paper } from '../../lib'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Paper>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Paper>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
