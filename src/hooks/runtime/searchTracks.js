import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import { youtubesearch } from '../../graphql/queries'
import { useDebounce } from '../useDebounce'

export function useSearchTracks(currentSearch) {
  const search = useDebounce(currentSearch, 300)
  const [searchResult, setSearchResult] = useState([])

  const searchYoutube = () => {
    if (search) {
      API.graphql(
        graphqlOperation(youtubesearch, {
          search,
        }),
      ).then(searchData => {
        setSearchResult(searchData.data.youtubesearch)
      })
    } else {
      setSearchResult([])
    }
  }

  useEffect(() => {
    searchYoutube()
  }, [search])

  return searchResult
}
