import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import loadable from '@loadable/component'
import { useInView } from 'react-intersection-observer'

import H2 from '../typo/h2'
import { Content } from '../components/elements'
import { usePlayer } from '../hooks/runtime/player'
import { useTracks } from '../hooks/runtime/tracks'

const LazySearchTracks = loadable(() => import('../components/SearchTracks'))
const LazyTrackList = loadable(() => import('../components/TrackList'))
const LazyReactPlayer = loadable(() => import('react-player'))

const FlexContainer = styled.div`
  ${tw`flex w-full flex-col md:flex-row`}
`
const FlexContent = styled.div`
  ${tw`md:flex-1`}
`

const extendYoutubeUrl = id => `https://www.youtube.com/watch?v=${id}`

const Music = ({ offset }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const tracks = useTracks()
  const { currentTrack, playing } = usePlayer()

  const url =
    currentTrack && currentTrack.youtubeId
      ? extendYoutubeUrl(currentTrack.youtubeId)
      : ''

  return (
    <Content speed={1} offset={offset}>
      <H2 ref={ref}>Serverless Music Player</H2>
      {inView && (
        <FlexContainer>
          <FlexContent>
            <LazyTrackList tracks={tracks} />
          </FlexContent>
          <FlexContent>
            <LazySearchTracks fallback={<div>Loading...</div>} />
          </FlexContent>
          <FlexContent>
            <LazyReactPlayer playing={playing} url={url} />
          </FlexContent>
        </FlexContainer>
      )}
    </Content>
  )
}
export default Music
