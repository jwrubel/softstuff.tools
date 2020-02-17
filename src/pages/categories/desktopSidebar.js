import React from "react"
import { Link } from "gatsby"
import { Container, Header, List } from 'semantic-ui-react'
import categories from '../../../content/categories.json'

const DesktopSidebar = () => {
  return (
    <Container>
        <Header as='h4'>Topics</Header>
        <List size='tiny'>
          {categories.map((category) => {
            return (
              <List.Item key={category._id}>
                <List.Content>
                  <List.Header>
                    <Link to={ `/topics/${category.slug}`}>{category.name}</Link>
                  </List.Header>
                  <List.Description>
                    {category.shortDescription}
                  </List.Description>
                </List.Content>
              </List.Item>
              )
            })
          }
        </List>
    </Container>
  )
}
export default DesktopSidebar