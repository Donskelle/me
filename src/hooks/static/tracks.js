import { graphql, useStaticQuery,  } from 'gatsby'
import {listTracks} from '../graphql/queries'

export const tracks = () => {
  const data = useStaticQuery(graphql`
    ${listTracks}
  `)
  return data.listTracks.items
}
