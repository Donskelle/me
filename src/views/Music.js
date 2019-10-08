import React, { useEffect, useState, Suspense, lazy } from 'react'
import ReactPlayer from 'react-player'
import { API, graphqlOperation } from 'aws-amplify'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import H2 from '../typo/h2'
import { Content } from '../components/elements'
import TrackList from '../components/TrackList'
import SearchTracks from '../components/SearchTracks'
import { updatePlayer } from '../graphql/mutations'
import { usePlayer } from '../hooks/runtime/player'
import { useTracks } from '../hooks/runtime/tracks'
// import SubHeading from '../typo/subheading'

// const LazySearchTracks = lazy(SearchTracks)

const FlexContainer = styled.div`
  ${tw`flex w-full flex-col md:flex-row`}
`
const FlexContent = styled.div`
  ${tw`md:flex-1`}
`

const extendYoutubeUrl = id => `https://www.youtube.com/watch?v=${id}`

const Music = ({ offset }) => {
  const tracks = useTracks()
  const { currentTrack, playing } = usePlayer()

  const playTrack = id => {
    API.graphql(
      graphqlOperation(updatePlayer, {
        input: {
          playerCurrentTrackId: id,
          id: 'dc3c047f-f0b0-4108-9632-f029440b14b6',
        },
      }),
    )
  }

  const url =
    currentTrack && currentTrack.youtubeId
      ? extendYoutubeUrl(currentTrack.youtubeId)
      : ''

  return (
    <Content speed={1} offset={offset}>
      <H2>Serverless Music Player</H2>
      <FlexContainer>
        <FlexContent>
          <TrackList tracks={tracks} playTrack={playTrack} />
        </FlexContent>
        <FlexContent>
          {/* <Suspense fallback={<p>Loading...</p>}>
            <LazySearchTracks />
          </Suspense> */}
          <SearchTracks />
        </FlexContent>
        <FlexContent>
          <ReactPlayer playing={playing} url={url} />
        </FlexContent>
      </FlexContainer>
    </Content>
  )
}
export default Music
