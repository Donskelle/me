import { useReducer, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import { useStaticTracks } from '../static/tracks'
import { listTracks } from '../../graphql/queries'
import { onCreateTrack as onCreateTrackSubcription } from '../../graphql/subscriptions'

const initialState = { tracks: [] }

// eslint-disable-next-line consistent-return
function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'set':
      return { tracks: action.payload }
    case 'add':
      return { tracks: [...state.tracks, action.payload] }
  }
}

export function useTracks() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const initialTracks = useStaticTracks()

  useEffect(() => {
    dispatch({ type: 'set', payload: initialTracks })

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

  return state.tracks
}
