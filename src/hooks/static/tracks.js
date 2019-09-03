import { graphql, useStaticQuery } from 'gatsby'
// import { listTracks } from '../../graphql/queries'

export const useStaticTracks = () => {
  const data = useStaticQuery(graphql`
    {
      muzzak {
        listTracks {
          items {
            addedBy
            id
            youtubeId
          }
        }
      }
    }
  `)
  return data.muzzak.listTracks.items
}
