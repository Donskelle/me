import { graphql, useStaticQuery } from 'gatsby';

export const useGithubStars = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          starredRepositories(
            orderBy: { field: STARRED_AT, direction: DESC }
            first: 10
          ) {
            totalCount
            nodes {
              name
              url
              isPrivate
              description
              stargazers {
                totalCount
              }
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              owner {
                ... on Github_Organization {
                  name
                  avatarUrl
                }
                ... on Github_User {
                  name
                  avatarUrl
                }
              }
            }
          }
        }
      }
    }
  `);
  const { nodes, totalCount } = data.github.viewer.starredRepositories;

  return {
    repos: nodes.filter((repo) => !repo.isPrivate),
    totalCount,
  };
};
