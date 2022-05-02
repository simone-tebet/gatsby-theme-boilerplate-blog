import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Row } from "../components/InsertRow";

import { useSiteMetadatas } from "../tools/useSiteMetadatas";
import PostsBlock from "@BlockBuilder/PostsBlock";
import HeadingBlock from "@BlockBuilder/HeadingBlock";

import MainTemplateWrapper from "@BlockBuilder/MainTemplateWrapper";

import { defaultSchema } from "../configs/schemas";

const IndexPage = props => {
  // const [showButton, setShowButton] = useState(true);
  // const [prompt, setPrompt] = useState();
  const {
    site,
    bannerContent,
    boilerplateLogo,
    profileOficial,
    diamond,
    diamondBg,
  } = useSiteMetadatas();
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;

  const findItem = postsList => {
    let x = [];
    postsList.map(e => {
      if (e.node.frontmatter.featuredPost === true) {
        x.push(e);
      }
    });
    return x;
  };
  const featuredPosts = findItem(posts);
  const imageQuery = getImage(bannerContent.childrenImageSharp[0]);
  const logoQuery = getImage(boilerplateLogo.childrenImageSharp[0]);
  const profileQuery = getImage(profileOficial.childrenImageSharp[0]);
  const diamondQuery = getImage(diamond.childrenImageSharp[0]);
  const diamondBgQuery = getImage(diamondBg.childrenImageSharp[0]);
  console.log("diamondQuery");
  console.log(diamondQuery.images.fallback.src);

  // useEffect(() => {
  //   const handle_storePrompt = e => {
  //     e.preventDefault();
  //     if (showButton) setPrompt(e);
  //   };

  //   window.addEventListener("beforeinstallprompt", e => handle_storePrompt(e));

  //   return _ => {
  //     window.removeEventListener("beforeinstallprompt", e =>
  //       handle_storePrompt(e)
  //     );
  //   };
  // }, [showButton]);

  // const handle_prompt = _ => {
  //   console.log("eita caraio");
  //   console.log(_);
  //   setShowButton(false);
  //   console.log(prompt);
  //   // prompt.prompt();
  //   // prompt.userChoice.then((choiceResult) => {
  //   //   if (choiceResult.outcome === 'accepted') {
  //   //     console.log('User accepted the A2HS prompt');
  //   //   } else {
  //   //     console.log('User dismissed the A2HS prompt');
  //   //   }
  //   //   setPrompt(null);
  //   // })
  // };

  // const btnInstall = (
  //   <button
  //     onClick={handle_prompt}
  //     style={{ display: `${showButton === true ? "block" : "none"}` }}
  //   >
  //     <small>Click to Install</small>
  //   </button>
  // );

  return (
    <MainTemplateWrapper
      logo={
        <GatsbyImage
          image={logoQuery}
          alt={"title"}
          placeholder={"NONE"}
          critical='true'
          className={""}
        />
      }
      seoSchema={defaultSchema(props.location)}
    >
      <Row
        opt={{ classes: "banner colorME", isBoxed: true, role: "something" }}
      >
        <GatsbyImage
          image={imageQuery}
          alt={"title"}
          placeholder={"NONE"}
          critical='true'
          className={""}
        />
      </Row>

      <main className='main-container' id='site-content' role='list'>
        <HeadingBlock classes='m30auto hack' importance={9} width={400}>
          Destaques da Simone
        </HeadingBlock>
        <Row opt={{ isBoxed: true, classes: "main-container-wrapper" }}>
          <PostsBlock
            postsPerPage={site.siteMetadata.postsPerPage}
            postList={featuredPosts}
            typeLoad={"push"} // or false
            // readMoreText="Ler Mais"
            pagination={{
              loadMoreBtn: true,
              loadMore: "Ler Mais",
            }}
            classes='colorME'
          />
        </Row>
        <HeadingBlock classes='m30auto hack' importance={10} width={400}>
          Simone Tebet
        </HeadingBlock>
        <Row opt={{ classes: "home-infos", isBoxed: true, role: "something" }}>
          <section className='main-page-wrapper'>
            <Row
              opt={{
                isBoxed: true,
                role: "something",
                classes: "home-profile",
                numColumns: 2,
              }}
            >
              <div className='home-profile-right-column'>
                <div className='diamond-profile'>
                  <GatsbyImage
                    image={profileQuery}
                    alt={"title"}
                    placeholder={"NONE"}
                    critical='true'
                    className={"diamond-img"}
                    style={{
                      WebkitMaskImage: `url(${diamondQuery.images.fallback.src})`,
                    }}
                  />
                  <GatsbyImage
                    image={diamondBgQuery}
                    alt={"title"}
                    placeholder={"NONE"}
                    critical='true'
                    className={"diamond-background"}
                    style={{
                      width: "190px",
                      height: "190px",
                    }}
                  />
                </div>
                <div className='home-profile-infos'>
                  <Link to='/' className='profile-btn'>
                    + Apoiar
                  </Link>
                  <Link to='/' className='profile-btn'>
                    + Seguir
                  </Link>
                </div>
              </div>
            </Row>
            <p>
              Simone Tebet, 52 anos, é natural de Três Lagoas, Minas Gerais.
            </p>
            <h2>Histórico</h2>
            <p>
              Filha de um político de ascendência libanesa, que também foi
              professor, advogado, promotor de justiça, sociólogo.
              <br />
              Destaca-se na política pelo seu notório saber jurídico e
              posicionamentos firmes. Simone é advogada, professora
              universitária e política. Formou-se em Direito pela Universidade
              Federal do Rio de Janeiro. É especialista em Ciência do Direito
              pela Escola Superior de Magistratura.
            </p>
            <h2>Profissão</h2>
            <p>
              Começou sua vida profissional aos 22 anos como professora
              universitária em seu Estado, no ano de 1992, atividade que exerceu
              por 12 anos. Trabalhou na Universidade Federal de Mato Grosso do
              Sul, Universidade Católica Dom Bosco, Universidade para o
              Desenvolvimento do Estado e Região do Pantanal e Faculdades
              Integradas de Campo Grande.
            </p>
            <p>
              Foi consultora técnica jurídica da Assembleia Legislativa do Mato
              Grosso do Sul entre os anos de 1995 e 1997 e foi diretora técnica
              legislativa entre 1997 e 2001.
            </p>
            <h2>Família Tebet</h2>
            <p>
              Tal como o pai, falecido, a filha possue vida pública por meio do
              Movimento Democrático Brasileiro (MDB). A senadora entrou
              efetivamente na política ao ser eleita aos 31 anos como Deputada
              Estadual, pelo então PMDB.
            </p>
            <p>
              Simone Tebet têm duas filhas e é casada com o político Eduardo
              Rocha, deputado estadual pelo estado do Mato Grosso do Sul. A
              declaração de bens de ambos é superior a 3 milhões de reais.
            </p>
          </section>
        </Row>
        <HeadingBlock classes='m30auto' importance={9} width={400}>
          Posts
        </HeadingBlock>
        <Row opt={{ isBoxed: true, classes: "main-container-wrapper" }}>
          <PostsBlock
            postsPerPage={site.siteMetadata.postsPerPage}
            postList={posts}
            typeLoad={"push"} // or false
            // readMoreText="Ler Mais"
            pagination={{
              loadMoreBtn: true,
              loadMore: "Ler Mais",
            }}
            classes='colorME'
          />
        </Row>
      </main>
    </MainTemplateWrapper>
  );
};

export default IndexPage;

export const queryAtividade = graphql`
  query {
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
            featuredPost
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
`;
