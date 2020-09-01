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
        {
          slicedRepos.map((star) => (
            <li key={star.url}>
              <Img fluid={star.imageFile.childImageSharp.fluid} />
              <p>
                {star.name} - {star.description} - Likes{' '}
                {star.stargazers.totalCount} - <a href={star.url}>Link</a>
              </p>
            </li>
          ))
          // .reduce((prev, curr) => [prev, <br />, curr])
        }
      </ul>
    </>
  );
};

export default RepoList;
