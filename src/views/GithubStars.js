import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useStaticQuery, graphql } from 'gatsby'

import { Content, ContentBG } from '../components/elements'
import { colors } from '../../tailwind'
import H2 from '../typo/h2'
import Subheading from '../typo/subheading'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`
export default ({ offset }) => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          name
          starredRepositories(
            orderBy: { field: STARRED_AT, direction: DESC }
            first: 20
          ) {
            totalCount
            nodes {
              name
              url
              description
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <ContentBG bg={colors['indigo-darker']} offset={offset} speed={0.2} />
      <Content speed={0.4} offset={offset}>
        <Wrapper>
          <H2>Interessting Repos on Github</H2>
          <Subheading>
            Check out hottest things happing in dev community on my{' '}
            {data.github.viewer.starredRepositories.totalCount} long github star
            feed
          </Subheading>
          {data.github.viewer.starredRepositories.nodes.map(star => (
            <div key={star.url}>
              {star.name} also liked from{' '}
              {star.stargazers.totalCount - 1
                ? `${
                    star.stargazers.totalCount - 2
                      ? `${star.stargazers.totalCount} pros`
                      : 'one pro'
                  }`
                : 'no one'}{' '}
              <a href={star.url}>Link</a>
            </div>
          ))}
        </Wrapper>
      </Content>
    </>
  )
}
