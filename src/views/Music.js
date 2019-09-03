import React from 'react'
import H2 from '../typo/h2'
import { Content } from '../components/elements'
import { useTracks } from '../hooks/runtime/tracks';

const WhatIDo = ({ offset }) => {
  const tracks = useTracks()
  return (
    <Content speed={1} offset={offset}>
      <H2>Add some music here</H2>
      {tracks.map(track => (
        <div key={track.id}>
          {track.youtubeId}
        </div>
      ))}
    </Content>
  )
}
export default WhatIDo
