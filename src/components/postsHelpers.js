import React from 'react'
import moment from 'moment'
import { Link } from "gatsby"
import { Item, Label } from 'semantic-ui-react'

/**
* @summary Format the post's date
* @param {Object} post
*/
const publishedOn = (publicationDate) => {
  return moment(publicationDate).format('DD MMMM YYYY')
}

/**
* @summary Format the post's duration
* @param {Object} post
*/
const minutesToRead = (duration) => {
  // duration is in seconds, so let's estimate minutes
  // by rounding up
  return duration ? `${duration} min. to read` : null
}

const renderCategory = (category, floated) => {
  const { _id, name, slug } = category
  const floatClassName = floated ? `${floated} floated` : ``
  return (
    <Label as={Link} size='tiny' className={`topic ${floatClassName}`} key={_id} to={`/topics/${slug}`}>
        {name}
    </Label>
  )
}
const renderCategories = (categories, floated) => {
  return(
  categories && categories.length > 0 ? <Item.Extra>
  {categories.map(category => (renderCategory(category, floated))
)}
</Item.Extra> : ""
)}


export { publishedOn, minutesToRead, renderCategories }