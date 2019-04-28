import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { StaticQuery, graphql } from 'gatsby'
import { Content } from '../components/elements'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const GithubStars = ({ offset = 0 }) => (
  <StaticQuery
    query={graphql`
    query {
      github {
        viewer {
          company
          name
        }
      }
    }
    `}
    render={data => (
      <Content speed={0.4} offset={offset}>
        <Wrapper>{data.github.viewer.name}</Wrapper>
      </Content>
    )}
  />
)
export default GithubStars
