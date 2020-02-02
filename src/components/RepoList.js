import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
// import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import { isMobile } from '../hooks/isMobile'

const RepoList = ({ repos }) => {
  const mobile = isMobile()
  const slicedRepos = (mobile && repos.slice(0, 8)) || repos
  return (
    <List>
      {slicedRepos
        .map(star => (
          <ListItem alignItems="flex-start" key={star.url}>
            <ListItemAvatar>
              <Avatar alt={star.owner.name} src={star.owner.avatarUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={star.name}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {star.description}
                  </Typography>
                  Likes {star.stargazers.totalCount} -{' '}
                  <a href={star.url}>Link</a>
                </>
              }
            />
          </ListItem>
        ))
        .reduce((prev, curr) => [
          prev,
          <Divider variant="inset" component="li" />,
          curr,
        ])}
    </List>
  )
}

export { RepoList }
