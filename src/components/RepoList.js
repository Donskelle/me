import React from 'react'

import { isMobile } from '../hooks/isMobile'

const RepoList = ({ repos }) => {
  const mobile = isMobile()
  const slicedRepos = (mobile && repos.slice(0, 8)) || repos
  return (
    <>
      {slicedRepos.map(star => (
        <div key={star.url}>
          <b>{star.name}</b> {star.description}
          <br />
          Likes {star.stargazers.totalCount} -{' '}
          <a href={star.url}>Github Link</a>
        </div>
      ))}
    </>
  )
}

export { RepoList }
