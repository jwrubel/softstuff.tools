/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const categories = require('./content/categories.json')
const categoryTemplate = path.resolve('./src/pages/categories/category.js')

exports.onCreateWebpackConfig = ({ actions }) => {   
  actions.setWebpackConfig({
   resolve: {
    alias: { "../../theme.config$": path.join(__dirname,  "src/semantic/theme.config")}
   }
  });
 };
 exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  categories.forEach(category => {
    createPage({
      path: `/topics/${category.slug}/`,
      component: categoryTemplate,
      context: {
        category
      },
    })
  })
}