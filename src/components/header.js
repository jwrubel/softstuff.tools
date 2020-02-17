import PropTypes from "prop-types"
import React from "react"
import { Container, Grid, Header, Image, List, Menu } from 'semantic-ui-react'

import logo from "../images/logo.png"

const SiteHeader = ({ siteTitle }) => (
  <div className="header-wrapper">
    <Menu id='site-menu' text size='tiny'>
      <Menu.Menu position='left'>
        <Menu.Item>
          <Image src={logo} size='tiny' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default SiteHeader
