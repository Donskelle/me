import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { graphql, useStaticQuery } from 'gatsby'

import { Content, ContentBG } from '../components/elements'
import Image from '../components/gitimg'
import { colors } from '../../tailwind'

const ImgWrapper = styled.div`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto overflow-hidden`};
`

const Me = ({ offset }) => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          name
          company
        }
      }
    }
  `)
  return (
    <>
      <ContentBG bg={colors['grey-darker']} offset={offset} speed={0.2} />
      <Content speed={1} offset={offset}>
        {data.github.viewer.name} @ {data.github.viewer.company}
        <ImgWrapper>
          <Image />
        </ImgWrapper>
      </Content>
    </>
  )
}
export default Me
