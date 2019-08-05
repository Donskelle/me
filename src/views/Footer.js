import React from 'react'

import { Content, ContentBG } from '../components/elements'
import { colors } from '../../tailwind'

const Footer = ({ offset }) => (
  <>
    <ContentBG speed={1} offset={offset} bg={colors.orange} />
    <Content speed={0.4} offset={offset}>
      © {new Date().getFullYear()}, Built with
      {` ❤`}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <a href="https://github.com/Donskelle/me">Source</a>
    </Content>
  </>
)
export default Footer
