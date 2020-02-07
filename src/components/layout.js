/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from 'gatsby'
import { Grid, Image, List, Segment } from 'semantic-ui-react'
import logotypeWhite from '../images/logotype-white.png'
import "./layout.css"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Helmet>
      <main>{children}</main>
      <div className="site-footer">
        <Grid centered textAlign='center'>
          <Grid.Column computer={8} tablet={12} mobile={16}>
            <Segment basic textAlign='center'>
              <Image src={logotypeWhite} centered size='medium' />
              The Soft Stuff is made with ❤️ for everyone who's ever stared at a blank screen trying to write a job description or awkwardly stumbled through a 1:1 meeting, not sure what questions to ask or what to say.  &copy; {new Date().getFullYear()}.
              <List link>
                <List.Item>
                  <Link to={`/privacy`}>
                    Privacy Policy
                  </Link>
                </List.Item>
                <List.Item>
                  <Link to={`/terms`}>
                    Terms of Use
                  </Link>
                </List.Item>
                <List.Item>
                  Say hello: &nbsp;
                  <a href='mailto://hello@softstuff.tools'>
                    <strong>hello@softstuff.tools</strong>
                  </a>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
