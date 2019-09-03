import { graphql, useStaticQuery } from 'gatsby'

export const useGithubStars = () => {
  const data = useStaticQuery(graphql`
  query {
    github {
      viewer {
        name
        starredRepositories(
          orderBy: { field: STARRED_AT, direction: DESC }
          first: 20
        ) {
          totalCount
          nodes {
            name
            url
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
  return data.github.viewer.starredRepositories
}
