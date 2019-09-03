import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import H2 from '../typo/h2'
import { Content } from '../components/elements'
import { useTracks } from '../hooks/runtime/tracks'

const extendYoutubeUrl = id => `https://www.youtube.com/watch?v=${id}`

const Muzzak = ({ offset }) => {
  const [url, setUrl] = useState(null)
  const [playing, setPlaying] = useState(false)
  const tracks = useTracks()

  const switchTrack = (id) => {
    setUrl(extendYoutubeUrl(id))
  }

  useEffect(() => {
    if (tracks && tracks.length) {
      const index = tracks.length - 1
      setUrl(extendYoutubeUrl(tracks[index].youtubeId))
      setPlaying(true)
    }
  }, [tracks])

  return (
    <Content speed={1} offset={offset}>
      <H2>Add some music here</H2>
      {tracks.map(track => (
        <div key={track.id} onClick={() => switchTrack(track.youtubeId)}>
          {track.youtubeId}
        </div>
      ))}
      <ReactPlayer playing={playing} url={url} />
    </Content>
  )
}
export default Muzzak
