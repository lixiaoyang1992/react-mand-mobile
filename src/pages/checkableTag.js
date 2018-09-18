import React, { Component } from 'react'
import { CheckableTag } from '../../lib/index.esm'

import Layout from '../components/layout'

class Demo extends Component {
  state = {
    checked: false,
  }
  onChange = value => {
    console.log(value)
    this.setState({
      checked: value,
    })
  }

  render() {
    return (
      <div>
        <CheckableTag checked={this.state.checked} onChange={this.onChange}>
          可选
        </CheckableTag>
      </div>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <h1>CheckableTag</h1>
    <p>可选标签</p>
    <Demo />
    <pre style={{ marginTop: 20 }}>
      {`
      class Demo extends Component {
        state = {
          checked: false,
        }
        onChange = value => {
          console.log(value)
          this.setState({
            checked: value,
          })
        }
      
        render() {
          return (
            <div>
              <CheckableTag checked={this.state.checked} onChange={this.onChange}>
                可选
              </CheckableTag>
            </div>
          )
        }
      }
      `}
    </pre>
  </Layout>
)

export default IndexPage
