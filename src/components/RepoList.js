// import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import React from 'react';

import { isMobile } from '../hooks/isMobile';
import { useGithubStars } from '../hooks/static/githubStars';
import Subheading from '../typo/subheading';


const RepoList = () => {
  const mobile = isMobile();
  const { repos, totalCount } = useGithubStars();
  const slicedRepos = (mobile && repos.slice(0, 8)) || repos;

  return (
    <>
      <Subheading>
        Check out hottest things happing in dev community on my {totalCount}{' '}
        long github star feed
      </Subheading>
      <ul>
        {slicedRepos
          .map((star) => (
            <li key={star.url}>
              <Img fluid={star.imageFile.childImageSharp.fluid} />
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
    </>
  );
};

export default RepoList;
