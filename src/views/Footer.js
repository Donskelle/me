import React from 'react'

import { colors } from '../../tailwind'
import { Content, ContentBG } from '../components/elements'

const Footer = ({ offset }) => (
  <>
    <ContentBG speed={1} offset={offset} bg={colors.orange} />
    <Content speed={0.4} offset={offset}>
      © {new Date().getFullYear()}, Built with ❤
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <a href="https://github.com/Donskelle/me">Source</a>
    </Content>
  </>
)
export default Footer
