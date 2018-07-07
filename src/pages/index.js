import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>使用方法</h1>
    <p>
      {`
      import {Header} from '@didi/react-component';
      import '@didi/react-component/build/style.less';
      `}
    </p>
  </Layout>
)

export default IndexPage
