import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { Content, ContentBG } from '../components/elements'
import H1 from '../typo/h1'
import Subheading from '../typo/subheading'
import { colors } from '../../tailwind'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Header = ({ offset }) => (
  <>
    <ContentBG
      bg={colors['green-darkest']}
      speed={0.2}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
    />
    <Content speed={1} offset={offset}>
      <Wrapper>
        <H1>
          Hi there,
        </H1>
        <Subheading>I like to build stuff</Subheading>
      </Wrapper>
    </Content>
  </>
)

export default Header
