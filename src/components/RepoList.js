// import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { isMobile } from '../hooks/isMobile';

const RepoList = ({ repos }) => {
  const mobile = isMobile();
  const slicedRepos = (mobile && repos.slice(0, 8)) || repos;
  return (
    <ul>
      {slicedRepos
        .map((star) => (
          <li key={star.url}>
              <Avatar alt={star.owner.name} src={star.owner.avatarUrl} />
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
          </li>
        ))
        .reduce((prev, curr, i) => [
          prev,
          <Divider key={i} variant="inset" component="li" />, // eslint-disable-line react/no-array-index-key
          curr,
        ])}
    </ul>
  );
};

export default RepoList;
