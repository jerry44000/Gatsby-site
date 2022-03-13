import React from "react";
import { graphql, Link } from "gatsby";
import { Button } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

export default function Home({ data }) {
  console.log(data);
  const feats = data.iconFeatures.nodes;
  const projects = data.projects.nodes;
  return (
    <Layout>
      <div id="home" className="w-100 h-100 position-relative">
        <div className="parallax-section d-flex justify-content-center align-items-center">
          <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center flex-column pb-5">
            <p className="fs-5 text-light mb-0 mt-5">The future is now</p>
            <h1 className="text-center display-1 fw-bolder text-light">
              The Best Hosting For You
            </h1>
            <p className="fs-5 text-light mb-4">Secure and reliable</p>
            <Button variant="primary">See more</Button>
          </div>
        </div>
      </div>
      <section className="container pt-5">
        <p className="fs-5 text-dark mb-0 mt-md-5 mt-4 text-center">
          You can lean on us
        </p>
        <h2 className="text-center display-4 mb-md-5 mb-3">
          Our servers are robust
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center pt-4 pb-5 mt-0 mt-md-5">
          {feats.map((feat) => (
            <div
              className="d-flex flex-column align-items-center"
              key={feat.frontmatter.title}
            >
              <div className="row justify-content-center">
                <GatsbyImage
                  alt="icons"
                  className="col-4"
                  image={getImage(
                    feat.frontmatter.featuredIcons.childImageSharp
                      .gatsbyImageData
                  )}
                />
              </div>
              <h2 className="fs-4">{feat.frontmatter.title}</h2>
              <p className="text-center">{feat.frontmatter.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="projects" className="border-bottom">
        <div className="container mb-5 pb-5">
          <h2 className="text-center mt-md-5 m-4 display-4">
            We are hosting those project
          </h2>
          <p className="fs-5 text-dark mb-md-5 mb-3 text-center">
            World Class Websites
          </p>
          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-md-3">
            {projects.map((project) => (
              <div>
                <div className="card">
                  <GatsbyImage
                    alt="thumb"
                    image={getImage(project.frontmatter.thumb)}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {project.frontmatter.titleProject}
                    </h5>
                    <p class="card-text">
                      {project.frontmatter.projectDescription}
                    </p>
                    <Link
                      to={"/" + project.frontmatter.slug}
                      key={project.id}
                    >
                      <Button>Take a look at it</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export const query = graphql`
  query {
    iconFeatures: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/features/" } }
    ) {
      nodes {
        frontmatter {
          description
          id
          title
          featuredIcons {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projectsDone/" } }
    ) {
      nodes {
        frontmatter {
          slug
          titleProject
          projectDescription
          thumb {
            childImageSharp {
              gatsbyImageData(
                # layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`;
