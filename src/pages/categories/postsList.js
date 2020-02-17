import React from "react"
import { Image, Item, List } from 'semantic-ui-react'

import { publishedOn, minutesToRead, renderCategories } from "../../components/postsHelpers"

import categories from '../../../content/categories.json'

const PostsList = ({posts}) => {
  return (
    <Item.Group link divided>
      {posts.map((post) => {
        const { categoriesIds, url, thumbnailUrl, duration, publicationDate, excerpt, author, publisher, title } = post
        const logo = publisher.logo ? <Image className='avatar' src={publisher.logo} /> : null
        const filteredCategories = categories.filter(category => categoriesIds.includes(category._id)) 
        return (
          <Item>
            <Item.Image as='a' href={url} size='small' src={thumbnailUrl} target='_blank'/>
            <Item.Content>
              <Item.Header as='a' href={url} target='_blank'>{title}</Item.Header>
              <Item.Meta>
                <List>
                  {publicationDate ? <List.Item>Published <strong>{
                  publishedOn(publicationDate)}</strong><br/></List.Item> : null}
                  {duration ? <List.Item>{minutesToRead(duration)}</List.Item> : null}
                </List>
              </Item.Meta>
              <Item.Description><span dangerouslySetInnerHTML={{__html: excerpt}} /></Item.Description>
              <Item.Extra>
                {author.name ? <span>by: <strong>{author.name}</strong></span> : null}
                {publisher.name ? <span>on: {logo} <strong>{publisher.name}</strong></span> : null}
              </Item.Extra>
              {renderCategories(filteredCategories, 'left')}
              {/* this.renderExtraData() */}
            </Item.Content>
          </Item>
        )}
      )}
    </Item.Group>
)}

export default PostsList
