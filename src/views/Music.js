import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { API, graphqlOperation } from 'aws-amplify'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import H2 from '../typo/h2'
import { Content } from '../components/elements'
import { useSearchTracks } from '../hooks/runtime/searchTracks'
import { createTrack, updatePlayer } from '../graphql/mutations'
import { usePlayer } from '../hooks/runtime/player'
import { useTracks } from '../hooks/runtime/tracks'
import SubHeading from '../typo/subheading'

const FlexContainer = styled.div`
  ${tw`flex w-full flex-col md:flex-row`}
`
const FlexContent = styled.div`
  ${tw`md:flex-1`}
`

const extendYoutubeUrl = id => `https://www.youtube.com/watch?v=${id}`

const Music = ({ offset }) => {
  const [searchYoutubeString, setSearchYoutubeString] = useState('')
  const tracks = useTracks()
  const { currentTrack, playing } = usePlayer()
  const { searchResult, loading, error } = useSearchTracks(searchYoutubeString)

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
  const addTrack = id => {
    const {
      title,
      channelTitle,
      publishedAt,
      description,
      thumbnails,
    } = searchResult.find(track => track.youtubeId === id)

    const trackDetail = {
      youtubeId: id,
      addedBy: 'Fabian',
      title,
      channelTitle,
      publishedAt,
      description,
      thumbnails,
    }
    API.graphql(graphqlOperation(createTrack, { input: trackDetail }))
  }

  let searchResultDom
  if (loading) {
    searchResultDom = 'Loading...'
  } else if (error) {
    searchResultDom = `Error: ${error}`
  } else {
    searchResultDom = searchResult.map(track => (
      <div key={track.youtubeId} onClick={() => addTrack(track.youtubeId)}>
        {track.title}
      </div>
    ))
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
          {tracks.map(track => (
            <div key={track.id} onClick={() => switchTrack(track.id)}>
              {track.title}
            </div>
          ))}
          <ReactPlayer playing={playing} url={url} />
        </FlexContent>
        <FlexContent>
          <SubHeading>Add some Music here</SubHeading>
          <input
            onChange={e => setSearchYoutubeString(e.target.value)}
            placeholder="Search Youtube"
            value={searchYoutubeString}
          />
          {searchResultDom}
        </FlexContent>
      </FlexContainer>
    </Content>
  )
}
export default Music
