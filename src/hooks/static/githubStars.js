import { graphql, useStaticQuery } from 'gatsby'

export const useGithubStars = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          starredRepositories(
            orderBy: { field: STARRED_AT, direction: DESC }
            first: 20
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
            }
          }
        }
      }
    }
  `)
  const { nodes, totalCount } = data.github.viewer.starredRepositories

  return {
    repos: nodes.filter(repo => !repo.isPrivate),
    totalCount,
  }
}
