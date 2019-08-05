import React from 'react'
// import styled from 'styled-components'
// import tw from 'tailwind.macro'

import H2 from '../typo/h2'
import { Content } from '../components/elements'

const WhatIDo = ({ offset }) => (
  <Content speed={0.5} offset={offset}>
    <H2>What I have done</H2>
    <article>Frontend CSS, Javascript, React, Custom Elements</article>
    <article>Backend NodeJS, PHP, MongoDB, MySQL</article>
    <article>Apps React Native, Electron, PhoneGap</article>
    <article>CMS/Shop Gatsby, Magento, Xt-Commerce, Wordpress, Typo3</article>
  </Content>
)
export default WhatIDo
