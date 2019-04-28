import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { graphql, useStaticQuery } from 'gatsby'

import { Content } from '../components/elements'
import Image from '../components/gitimg'

const ImgWrapper = styled.div`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const Header = ({ offset = 0 }) => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          name
        }
      }
    }
  `)
  return (
    <Content speed={1} offset={offset}>
      {data.github.viewer.name}
      <ImgWrapper>
        <Image />
      </ImgWrapper>
    </Content>
  )
}
export default Header
