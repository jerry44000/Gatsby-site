const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/project-details.js')
    const res = await graphql(`
    query Article {
        allMarkdownRemark {
          
            nodes {
              frontmatter {
                slug
              }
            }
          
        }
      }`)

    res.data.allMarkdownRemark.nodes.forEach( node => {
        createPage({
            component: projectTemplate,
            path: `/${node.frontmatter.slug}`,
            context: {
                slug: node.frontmatter.slug,
            }
        })
        
    });

}
