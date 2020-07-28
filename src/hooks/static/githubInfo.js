import { graphql, useStaticQuery } from 'gatsby';

export const useGithubInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          name
          company
        }
      }
    }
  `);
  return data.github.viewer;
};
