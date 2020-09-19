import React from 'react';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo';

const Error404 = () => (
  <Layout>
    <SEO title="404 error" description="We do not have that page tho" />
    <h2 >Er00r 404</h2>
    <div>I do not have that page tho</div>
  </Layout>
);

export default Error404;
