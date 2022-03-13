import React from "react";
import Layout from "../components/Layout.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const projectDetails = ({ data }) => {
  const { html } = data.allMarkdownRemark;
  const { titleProject, bannerImg } = data.allMarkdownRemark.frontmatter;
  return (
    <Layout>
      <div>
        <h2>{titleProject}</h2>
        <div>
          <GatsbyImage
            image={getImage(bannerImg.childImageSharp.gatsbyImageData)}
            alt="banner"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
};

export default projectDetails;

// export const query = graphql`
//     query ProjectsPage($slug: String) {
//         markdownRemark(frontmatter: {slug: {eq: $slug}}) {
//             html
//             frontmatter {
//                 titleProject
//                 bannerImg {
//                     childImageSharp {
//                         gatsbyImageData
//                     }
//                 }
//             }
//         }
//     }
// `;
export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projectsDone/" } }
    ) {
      nodes {
        
        frontmatter {
          slug
          titleProject
          bannerImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
