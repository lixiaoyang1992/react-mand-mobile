import { graphql } from 'gatsby';
import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Layout from '../layouts';
import { Paper } from '../../components';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string,
      },
    },
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

const code = `class Example extends React.Component {
  render() {
    return <Paper>aaa</Paper>
  }
}
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  readonly hello = `Hello`;
  public render() {
    const { siteName } = this.props.data.site.siteMetadata;
    const scope = { Paper };
    return (
      <Layout>
        <LiveProvider code={code} scope={scope}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </Layout>
    );
  }
}
