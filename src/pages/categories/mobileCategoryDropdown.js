import React from "react"
import { Link } from "gatsby"
import { Dropdown } from 'semantic-ui-react'
import categories from '../../../content/categories.json'

const MobileCategoryDropdown = () => {
  return (
    <Dropdown
    id='mobile-topic-dropdown'
    inline
    scrolling
    closeOnChange
    text={`See posts from other topics:`}
    >
      <Dropdown.Menu>
        {categories.map((category) => {
          return (
            <Dropdown.Item key={category._id}>
              <Link to={`/topics/${category.slug}`}>{category.name}</Link>
            </Dropdown.Item>
            )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default MobileCategoryDropdown