import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { colors } from '../../tailwind'
import { Content, ContentBG } from '../components/elements'
import { RepoList } from '../components/RepoList'
import { useGithubStars } from '../hooks/static/githubStars'
import H2 from '../typo/h2'
import Subheading from '../typo/subheading'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`
export default ({ offset }) => {
  const repos = useGithubStars()

  return (
    <>
      <ContentBG bg={colors['indigo-darker']} offset={offset} speed={0.2} />
      <Content speed={0.4} offset={offset}>
        <Wrapper>
          <H2>Interessting Repos on Github</H2>
          <Subheading>
            Check out hottest things happing in dev community on my{' '}
            {repos.totalCount} long github star feed
          </Subheading>
          <RepoList repos={repos} />
        </Wrapper>
      </Content>
    </>
  )
}
