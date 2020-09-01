import loadable from '@loadable/component';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import { Content, ContentBG } from '../components/elements';
import H2 from '../typo/h2';

const LazyRepoList = loadable(() => import('../components/RepoList'));

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;
export default ({ offset }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      <ContentBG bg="#2f365f" offset={offset} speed={0.2} />
      <Content speed={0.4} offset={offset}>
        <Wrapper>
          <H2 ref={ref}>Interessting Repos on Github</H2>
          {inView && <LazyRepoList />}
        </Wrapper>
      </Content>
    </>
  );
};
