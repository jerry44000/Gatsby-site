import React from "react";
import Layout from "../components/Layout.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const projectsDetails = ({ data }) => {
  console.log(data);
  const { html } = data.markdownRemark;
  const { titleProject, bannerImg } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div>
        <div>
          <GatsbyImage
            image={getImage(bannerImg.childImageSharp.gatsbyImageData)}
            alt="banner"
          />
        </div>
        <h2 className="text-center display-4 mt-5 mb-md-5 mb-3">
          {titleProject}
        </h2>
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  );
};

export default projectsDetails;
export const query = graphql`
  query MesBurnes($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/projectsDone/" }
    ) {
      html
      frontmatter {
        titleProject
        bannerImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
