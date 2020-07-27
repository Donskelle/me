import { graphql, useStaticQuery } from "gatsby";

export const useStaticTracks = () => {
  const data = useStaticQuery(graphql`
    {
      muzzak {
        listTracks {
          items {
            addedBy
            id
            youtubeId
            title
            description
          }
        }
      }
    }
  `);
  return data.muzzak.listTracks.items;
};
