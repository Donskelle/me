import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import {
  deleteTrack as deleteTrackMutation,
  updatePlayer as updatePlayerMutation,
} from '../graphql/mutations'

export default function InteractiveList({ tracks }) {
  const deleteTrack = id => {
    API.graphql(graphqlOperation(deleteTrackMutation, { input: { id } }))
  }
  const playTrack = id => {
    API.graphql(
      graphqlOperation(updatePlayerMutation, {
        input: {
          playerCurrentTrackId: id,
          id: 'dc3c047f-f0b0-4108-9632-f029440b14b6',
        },
      }),
    )
  }

  return (
    <List dense>
      {tracks.map(track => (
        <ListItem key={track.id}>
          <ListItemAvatar>
            <Avatar>{track.addedBy.slice(0, 2)}</Avatar>
          </ListItemAvatar>
          <ListItemText
            onClick={() => playTrack(track.id)}
            primary={track.title}
            secondary={track.channelTitle}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteTrack(track.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}
