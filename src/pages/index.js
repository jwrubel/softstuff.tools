import React from "react"
import { Container, Grid, Header, Image, List } from 'semantic-ui-react'
import { Link } from "gatsby"

import categories from '../../content/categories.json'
import fullLogoDark from "../images/full-logo-dark.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Grid id='welcome-box' verticalAlign='middle' columns={2} padded>
      <Grid.Row only='mobile'>
        <Grid.Column width={16}>
          <Header as='h1'>&quot;I'm about to schedule 1:1s with my team, and I don't know what to say.&quot;</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='mobile'>
        <Grid.Column width={8}>
          <Header sub>The Soft Stuff gathers how-tos, templates, and articles to help you be the manager and leader your team needs. It's a place to discover helpful tools and share what you know with your peers.</Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <Image src={fullLogoDark} size='small' floated='right'/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='tablet computer'>
        <Grid.Column floated='left'>
          <Header as='h1'>&quot;I'm about to schedule 1:1s with my team, and I don't know what to say.&quot;</Header>
          <Header sub>The Soft Stuff gathers how-tos, templates, and articles to help you be the manager and leader your team needs. It's a place to discover helpful tools and share what you know with your peers.</Header>
        </Grid.Column>
        <Grid.Column floated='right'>
          <Image src={fullLogoDark} size='medium' floated='right'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container>
      <Header as='h3'>The Soft Stuff has articles in the following categories:</Header>
      <List link divided relaxed>
        {categories.map((data) => {
          return(
            <List.Item key={data._id}>
              <Link to={`/topics/${data.slug}`}><List.Header as='a'>{data.name}</List.Header></Link>
              <List.Description>
                {data.description}
              </List.Description>
            </List.Item>
          )
        })}
      </List>
    </Container>
  </Layout>
)

export default IndexPage
