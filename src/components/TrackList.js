import { API, graphqlOperation } from 'aws-amplify';
import React from 'react';

import {
  deleteTrack as deleteTrackMutation,
  updatePlayer as updatePlayerMutation,
} from '../graphql/mutations';
import { useTracks } from '../hooks/runtime/tracks';
import SubHeading from '../typo/subheading';
import Button from "./Button";



export default function InteractiveList({ currentTrackId }) {
  const tracks = useTracks();

  const deleteTrack = (id) => {
    API.graphql(graphqlOperation(deleteTrackMutation, { input: { id } }));
  };
  const playTrack = (id) => {
    API.graphql(
      graphqlOperation(updatePlayerMutation, {
        input: {
          playerCurrentTrackId: id,
          id: 'dc3c047f-f0b0-4108-9632-f029440b14b6',
        },
      }),
    );
  };

  return (
    <>
      <SubHeading>Current Tracklist</SubHeading>
      <ul>
        {tracks.map((item) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            key={item.id}
            selected={currentTrackId === item.id}
            onClick={() => playTrack(item.id)}
          >
            {item.addedBy.slice(0, 2)}
            <p>
              {item.title} - {item.channelTitle}
            </p>
            <Button onClick={() => deleteTrack(item.id)}>delete</Button>
          </li>
        ))}
      </ul>
    </>
  );
}
