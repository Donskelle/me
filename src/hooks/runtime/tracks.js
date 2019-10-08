import { useReducer, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import { useStaticTracks } from '../static/tracks'
import { listTracks } from '../../graphql/queries'
import {
  onCreateTrack as onCreateTrackSubcription,
  onDeleteTrack as onDeleteTrackSubcription,
} from '../../graphql/subscriptions'

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
  const initialTracks = useStaticTracks()
  const [state, dispatch] = useReducer(reducer, initialTracks)

  useEffect(() => {
    API.graphql(graphqlOperation(listTracks)).then(tracksData => {
      dispatch({ type: 'set', payload: tracksData.data.listTracks.items })
    })
  }, [])

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
