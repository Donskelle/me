import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { API, graphqlOperation } from 'aws-amplify'

import H2 from '../typo/h2'
import { Content } from '../components/elements'
import { useTracks } from '../hooks/runtime/tracks'
import { createTrack, updatePlayer } from '../graphql/mutations'
import { usePlayer } from '../hooks/runtime/player'

const extendYoutubeUrl = id => `https://www.youtube.com/watch?v=${id}`

const Muzzak = ({ offset }) => {
  const [url, setUrl] = useState(null)
  const [addYoutubeId, setAddYoutubeId] = useState('')
  // const [playing, setPlaying] = useState(false)
  const tracks = useTracks()
  const { status, currentTrack, startTime, playing } = usePlayer()

  const switchTrack = id => {
    API.graphql(
      graphqlOperation(updatePlayer, {
        input: {
          playerCurrentTrackId: id,
          id: 'dc3c047f-f0b0-4108-9632-f029440b14b6',
        },
      }),
    )
  }

  const addTrack = () => {
    if (addYoutubeId.length < 5) return alert('Retard')

    const trackDetail = {
      youtubeId: addYoutubeId,
      addedBy: 'Fabian',
    }
    API.graphql(graphqlOperation(createTrack, { input: trackDetail }))
    setAddYoutubeId('')
  }

  useEffect(() => {
    if (currentTrack) {
      setUrl(extendYoutubeUrl(currentTrack.youtubeId))
    }
    console.log(playing, currentTrack, startTime)
  }, [playing, currentTrack, startTime])

  // useEffect(() => {
  //   if (tracks && tracks.length) {
  //     const index = tracks.length - 1
  //     switchTrack(tracks[index].youtubeId)
  //     setPlaying(true)
  //   }
  // }, [tracks])

  return (
    <Content speed={1} offset={offset}>
      <H2>Add some music here</H2>
      {tracks.map(track => (
        <div key={track.id} onClick={() => switchTrack(track.id)}>
          {track.youtubeId}
        </div>
      ))}
      <input
        onChange={e => setAddYoutubeId(e.target.value)}
        placeholder="YoutubeId"
        value={addYoutubeId}
      />
      <button onClick={addTrack}>Add Track</button>
      <ReactPlayer playing={playing} url={url} />
    </Content>
  )
}
export default Muzzak
