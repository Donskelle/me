import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import { youtubesearch } from '../../graphql/queries'
import { useDebounce } from '../useDebounce'

export function useSearchTracks(currentSearch) {
  const search = useDebounce(currentSearch, 300)
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (search) {
      setLoading(true)
      API.graphql(
        graphqlOperation(youtubesearch, {
          search,
        }),
      )
        .then(searchData => {
          setError('')
          setSearchResult(searchData.data.youtubesearch)
        })
        .catch(e => {
          setError(e)
        })
        .finally(() => setLoading(false))
    }
  }, [search])

  useEffect(() => {
    if (!currentSearch) {
      setSearchResult([])
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [currentSearch])

  return { searchResult, loading, error }
}
