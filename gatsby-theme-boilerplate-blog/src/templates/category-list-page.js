import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Row } from "../components/InsertRow";
import HeadingBlock from "@BlockBuilder/HeadingBlock";
import MainTemplateWrapper from "@BlockBuilder/MainTemplateWrapper";
import PostsBlock from "@BlockBuilder/PostsBlock";
import { useSiteMetadatas } from "../tools/useSiteMetadatas";
import { defaultSchema } from "../configs/schemas";

const CategoryListPage = props => {
  return (
    <StaticQuery
      query={graphql`
        query CategoriesList {
          allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: 900
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                  title
                  categories
                  featuredImage {
                    childrenImageSharp {
                      gatsbyImageData(
                        width: 400
                        height: 200
                        placeholder: DOMINANT_COLOR
                        quality: 100
                      )
                    }
                  }
                }
                excerpt(pruneLength: 200)
              }
            }
          }
        }
      `}
      render={data => {
        const categoriesList = data.allMarkdownRemark.edges;

        const { site, bannerContent, boilerplateLogo } = useSiteMetadatas();

        const imageQuery = getImage(bannerContent.childrenImageSharp[0]);
        const logoQuery = getImage(boilerplateLogo.childrenImageSharp[0]);
        const categoriesContext = props.pageContext.categories;
        const categoriesListFiltered = categoriesList.filter(item => {
          return item.node.frontmatter.categories.includes(categoriesContext);
        });
        return (
          <MainTemplateWrapper
            classes='blog-list'
            seoSchema={defaultSchema(props.location)}
            logo={
              <GatsbyImage
                image={logoQuery}
                alt={"title"}
                placeholder={"NONE"}
                critical='true'
                className={""}
              />
            }
          >
            <Row
              opt={{
                classes: "banner colorME",
                isBoxed: true,
                role: "something",
              }}
            >
              <GatsbyImage
                image={imageQuery}
                alt={"title"}
                placeholder={"NONE"}
                critical='true'
                className={" banner-img"}
              />
            </Row>
            <main className='main-container' role='list'>
              <HeadingBlock classes='m30auto' importance={9} width={400}>
                Posts da Categoria: {props.pageContext.categories}
              </HeadingBlock>
              <Row opt={{ isBoxed: true, classes: "main-container-wrapper" }}>
                <PostsBlock
                  postList={categoriesListFiltered}
                  postsPerPage={site.siteMetadata.postsPerPage}
                  readMoreText='Ler Mais'
                  pagination={{
                    loadMoreBtn: true,
                    loadMore: "Ler Mais",
                  }}
                />
              </Row>
            </main>
          </MainTemplateWrapper>
        );
      }}
    />
  );
};
export default CategoryListPage;
