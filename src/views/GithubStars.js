import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useStaticQuery, graphql } from 'gatsby'

import { Content } from '../components/elements'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

export default ({ offset = 0 }) => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          name
          starredRepositories(
            last: 60
            orderBy: { field: STARRED_AT, direction: DESC }
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
    <Content speed={0.4} offset={offset}>
      <Wrapper>
        Check out {data.github.viewer.starredRepositories.totalCount} repos i
        like
        {data.github.viewer.starredRepositories.nodes.map(star => (
          <div>
            {star.name} also liked from {star.stargazers.totalCount}{' '}
            <a href={star.url}>Link</a>
          </div>
        ))}
      </Wrapper>
    </Content>
  )
}
