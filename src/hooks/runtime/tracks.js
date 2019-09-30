import { useReducer, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import { useStaticTracks } from '../static/tracks'
import { listTracks } from '../../graphql/queries'
import { onCreateTrack as onCreateTrackSubcription } from '../../graphql/subscriptions'

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      return  [...action.payload]
    case 'add':
      return [...state, action.payload]
    default:
      return state
  }
}

export function useTracks() {
  const initialTracks = useStaticTracks()
  const [state, dispatch] = useReducer(reducer, initialTracks)

  useEffect(() => {
    API.graphql(graphqlOperation(listTracks)).then(tracksData => {
      dispatch({ type: 'set', payload: tracksData.data.listTracks.items })
    })
  }, [])

  useEffect(() => {
    const subscriber = API.graphql(graphqlOperation(onCreateTrackSubcription)).subscribe({
      next: data => {
        const {
          value: {
            data: { onCreateTrack },
          },
        } = data
        dispatch({ type: 'add', payload: onCreateTrack })
      },
    })
    return () => subscriber.unsubscribe()
  }, [])

  return state
}
