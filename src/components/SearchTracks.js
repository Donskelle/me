import TextField from "@material-ui/core/TextField";
import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";

import { createTrack } from "../graphql/mutations";
import { useSearchTracks } from "../hooks/runtime/searchTracks";
import SubHeading from "../typo/subheading";
import { cleanObjectReference } from "../utils";

const SearchTrack = () => {
  const [searchYoutubeString, setSearchYoutubeString] = useState("");
  const { searchResult, loading, error } = useSearchTracks(searchYoutubeString);

  const addTrack = (id) => {
    const {
      title,
      channelTitle,
      publishedAt,
      description,
      thumbnails,
    } = searchResult.find((track) => track.youtubeId === id);

    const trackDetail = {
      youtubeId: id,
      addedBy: "Fabian",
      title,
      channelTitle,
      publishedAt,
      description,
      thumbnails,
    };
    cleanObjectReference(trackDetail);
    API.graphql(graphqlOperation(createTrack, { input: trackDetail }));
  };

  let searchResultDom;
  if (loading) {
    searchResultDom = "Loading...";
  } else if (error) {
    searchResultDom = `Error: ${error}`;
  } else if (searchResult.length === 0 && searchYoutubeString) {
    searchResultDom = "Empty Result";
  } else {
    searchResultDom = searchResult.map((track) => (
      <div key={track.youtubeId} onClick={() => addTrack(track.youtubeId)}>
        {track.title}
      </div>
    ));
  }

  return (
    <>
      <SubHeading>Add some Music here</SubHeading>
      <TextField
        id="filled-full-width"
        label="Search Music"
        style={{ padding: 4 }}
        fullWidth
        margin="normal"
        variant="filled"
        onChange={(e) => setSearchYoutubeString(e.target.value)}
        value={searchYoutubeString}
      />
      {searchResultDom}
    </>
  );
};

export default SearchTrack;
