import React from 'react'

import { Content } from '../components/elements'

const Footer = ({ children, offset = 0 }) => (
  <Content speed={0.4} offset={offset}>
    {children}
  </Content>
)
export default Footer
