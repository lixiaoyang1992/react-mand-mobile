import React from 'react'
import { Link } from 'gatsby'
import { Paper } from '../../lib'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Paper</h1>
    <p>卡片</p>
    <Paper style={{ padding: 20 }}>
      <h1>Hi people</h1>
      <p>这是一个paper的demo.</p>
      <p>这是一个paper的demo.</p>
    </Paper>
    <pre style={{ marginTop: 20 }}>
      {`
    <Paper style={{ padding: 20 }}>
      <h1>Hi people</h1>
      <p>这是一个paper的demo.</p>
      <p>这是一个paper的demo.</p>
    </Paper>
      `}
    </pre>
  </Layout>
)

export default IndexPage
