import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card, Divider, Grid, Header, Image, List, Segment } from 'semantic-ui-react'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import posts from '../../../content/posts.json'
import categories from '../../../content/categories.json'

const Category = ({pageContext}) => {
  const { _id, description, name, shortDescription } = pageContext.category
  const filteredPosts = posts.filter(post => post.categoriesIds.includes(_id))
  return (
  <Layout>
    <SEO title={`${name} articles on The Soft Stuff`} description={description} type={'article:section'} sectionName={name}/>
    <Segment>
      <Header as='h1' dividing>
        {name}
        <Header.Subheader>{shortDescription}</Header.Subheader>
      </Header>
      <span className='topic-description'>{description}</span>
      <Divider/>
      <Card.Group>
        {filteredPosts.map(post => (
            <Card key={post._id}>
              <Link to={post.url}><Image src={post.thumbnailUrl} wrapped ui={false} /></Link>
              <Card.Content>
                <Card.Header>{post.title}</Card.Header>
                <Card.Description>
                  {post.body}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span>blah</span>
              </Card.Content>
            </Card>
          )
        )}
      </Card.Group>
    </Segment>
  </Layout>
)}

export default Category
