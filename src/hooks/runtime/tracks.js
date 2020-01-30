import { API, graphqlOperation } from 'aws-amplify'
import { useEffect,useReducer } from 'react'

import { listTracks } from '../../graphql/queries'
import {
  onCreateTrack as onCreateTrackSubcription,
  onDeleteTrack as onDeleteTrackSubcription,
} from '../../graphql/subscriptions'
import { useStaticTracks } from '../static/tracks'

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      return [...action.payload]
    case 'add':
      return [...state, action.payload]
    case 'delete':
      return [...state].filter(track => track.id !== action.payload.id)
    default:
      return state
  }
}

export function useTracks() {
  // Build Time Request
  const initialTracks = useStaticTracks()
  const [state, dispatch] = useReducer(reducer, initialTracks)

  // Update Tracks after Render
  useEffect(() => {
    API.graphql(graphqlOperation(listTracks)).then(tracksData => {
      dispatch({ type: 'set', payload: tracksData.data.listTracks.items })
    })
  }, [])
  
  // Register for Tracks updates
  useEffect(() => {
    const subscriberCreate = API.graphql(
      graphqlOperation(onCreateTrackSubcription),
    ).subscribe({
      next: data => {
        const {
          value: {
            data: { onCreateTrack },
          },
        } = data
        dispatch({ type: 'add', payload: onCreateTrack })
      },
    })

    const subscriberDelete = API.graphql(
      graphqlOperation(onDeleteTrackSubcription),
    ).subscribe({
      next: data => {
        const {
          value: {
            data: { onDeleteTrack },
          },
        } = data
        dispatch({ type: 'delete', payload: onDeleteTrack })
      },
    })

    return () => {
      subscriberCreate.unsubscribe()
      subscriberDelete.unsubscribe()
    }
  }, [])

  return state
}
