import React from 'react'

import { Content, ContentBG } from '../components/elements'
import { colors } from '../../tailwind'

const Footer = ({ children, offset }) => (
  <>
    <ContentBG speed={1} offset={offset} bg={colors.orange} />
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
  </>
)
export default Footer
