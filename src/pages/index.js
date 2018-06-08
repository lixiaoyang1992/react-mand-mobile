import React from 'react'
import Link from 'gatsby-link'
import { NoticeBar } from '../../lib'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <NoticeBar>22</NoticeBar>
  </div>
)

export default IndexPage
