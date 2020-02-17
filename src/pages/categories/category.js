import React from "react"
import { Container, Grid, Header, Image } from 'semantic-ui-react'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostsList from "./postsList"
import DesktopSidebar from './desktopSidebar'
import MobileCategoryDropdown from './mobileCategoryDropdown'

import logo from "../../images/full-logo-dark-square.png"
import posts from '../../../content/posts.json'

const Category = ({pageContext}) => {
  const { _id, description, name, shortDescription } = pageContext.category
  const filteredPosts = posts.filter(post => post.categoriesIds.includes(_id))

  return (
  <Layout>
    <SEO title={`${name} articles on The Soft Stuff`} description={description} type={'article:section'} sectionName={name}/>
    <Grid stackable>
      <Grid.Column width={16}>
        <Header as='h1' dividing>
          <Image as='a' src={logo} href='/' />
          {name}
          <Header.Subheader>{shortDescription}</Header.Subheader>
        </Header>
        <span className='topic-description'>{description}</span>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={12} computer={10}>
        <PostsList posts={filteredPosts}/>
      </Grid.Column>
      <Grid.Column tablet={4} computer={6} only='tablet computer'>
        {/* desktop category sidebar */}
        <DesktopSidebar />
      </Grid.Column>
      <Grid.Column mobile={16} only='mobile'>
        {/* other categories dropdown (mobile) */}
        <Container textAlign='center'><MobileCategoryDropdown /></Container>
      </Grid.Column>
    </Grid>
  </Layout>
)}

export default Category
