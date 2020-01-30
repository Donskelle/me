import loadable from '@loadable/component'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { Content, ContentBG } from '../components/elements'
import H2 from '../typo/h2'

const LazyContactForm = loadable(() => import('../components/ContactForm'))

const Contact = ({ offset }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <>
      <ContentBG speed={0.2} offset={offset} />
      <Content speed={0.5} offset={offset}>
        <H2 ref={ref}>Lets get in touch !</H2>
        {inView && <LazyContactForm fallback={<p>Loading</p>} />}
      </Content>
    </>
  )
}

export default Contact
