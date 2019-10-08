import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import SubHeading from '../typo/subheading'
import { useSearchTracks } from '../hooks/runtime/searchTracks'
import { createTrack } from '../graphql/mutations'
import { cleanObject } from '../utils'

const SearchTrack = () => {
  const [searchYoutubeString, setSearchYoutubeString] = useState('')
  const { searchResult, loading, error } = useSearchTracks(searchYoutubeString)

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
    cleanObject(trackDetail)
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

  return (
    <>
      <SubHeading>Add some Music here</SubHeading>
      <input
        onChange={e => setSearchYoutubeString(e.target.value)}
        placeholder="Search Youtube"
        value={searchYoutubeString}
      />
      {searchResultDom}
    </>
  )
}

export default SearchTrack
