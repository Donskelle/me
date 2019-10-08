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

import { deleteTrack as deleteTrackMutation } from '../graphql/mutations'

export default function InteractiveList({ tracks, playTrack }) {
  const deleteTrack = id => {
    API.graphql(graphqlOperation(deleteTrackMutation, { input: { id } }))
  }

  return (
    <List dense>
      {tracks.map(track => (
        <ListItem key={track.id}>
          <ListItemAvatar>
            <Avatar>Fa</Avatar>
          </ListItemAvatar>
          <ListItemText
            onClick={() => playTrack()}
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
