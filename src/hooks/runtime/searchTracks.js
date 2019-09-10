import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import { youtubesearch } from '../../graphql/queries'

export function useSearchTracks(currentSearch) {
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    if (currentSearch) {
      API.graphql(
        graphqlOperation(youtubesearch, {
          search: currentSearch,
        }),
      ).then(searchData => {
        setSearchResult(searchData.data.youtubesearch)
      })
    }
  }, [currentSearch])

  return searchResult
}

function debounce(callback, wait) {
  let timeout
  return (...args) => {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => callback.apply(context, args), wait)
  }
}
