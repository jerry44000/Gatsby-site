const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
  query Articles {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projectsDone/"}}) {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/projectsDone/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}















// const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const projectTemplate = path.resolve('./src/templates/project-details.js')
//     const res = await graphql(`
//     query Projects {
//         allMarkdownRemark {
          
//             nodes {
//               frontmatter {
//                 slug
//               }
//             }
          
//         }
//       }`)

//     res.data.allMarkdownRemark.nodes.forEach( node => {
//         createPage({
//             component: projectTemplate,
//             path: `/projectsDone/${node.frontmatter.slug}`,
//             context: {
//                 slug: node.frontmatter.slug,
//             }  
//         })
        
//     });

// }
