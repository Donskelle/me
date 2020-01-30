import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { useTransition, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import SubHeading from '../typo/subheading'
import { useTracks } from '../hooks/runtime/tracks'

import {
  deleteTrack as deleteTrackMutation,
  updatePlayer as updatePlayerMutation,
} from '../graphql/mutations'

const AnimatedListItem = styled(animated(ListItem))``

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
}))

export default function InteractiveList({ currentTrackId }) {
  const tracks = useTracks()

  const classes = useStyles()

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

  const transitionsTracks = useTransition(tracks, item => item.id, {
    enter: { opacity: 1, height: 80 },
    leave: { opacity: 0, height: 0 },
  })

  return (
    <>
      <SubHeading>Current Tracklist</SubHeading>
      <List dense className={classes.root}>
        {transitionsTracks.map(({ item, key, props: { ...rest } }) => (
          <AnimatedListItem
            key={key}
            style={rest}
            button
            selected={currentTrackId === item.id}
            onClick={() => playTrack(item.id)}
          >
            <ListItemAvatar>
              <Avatar>{item.addedBy.slice(0, 2)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.channelTitle} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTrack(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </AnimatedListItem>
        ))}
      </List>
    </>
  )
}
