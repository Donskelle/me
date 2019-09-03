import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { Content, ContentBG } from '../components/elements'
import { colors } from '../../tailwind'
import H2 from '../typo/h2'
import Subheading from '../typo/subheading'
import { isMobile } from '../hooks/isMobile'
import { useGithubStars } from '../hooks/static/githubStars'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`
export default ({ offset }) => {
  const starredRepositories = useGithubStars();
  const mobile = isMobile()
  const repos = mobile
    ? starredRepositories.nodes.slice(0, 10)
    : starredRepositories.nodes

  return (
    <>
      <ContentBG bg={colors['indigo-darker']} offset={offset} speed={0.2} />
      <Content speed={0.4} offset={offset}>
        <Wrapper>
          <H2>Interessting Repos on Github</H2>
          <Subheading>
            Check out hottest things happing in dev community on my{' '}
            {starredRepositories.totalCount} long github star
            feed
          </Subheading>
          {repos.map(star => (
            <div key={star.url}>
              {star.name} {star.description}
              Likes {star.stargazers.totalCount} - <a href={star.url}>Link</a>
            </div>
          ))}
        </Wrapper>
      </Content>
    </>
  )
}
