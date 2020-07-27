import loadable from '@loadable/component';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import { Content } from '../components/elements';
import { usePlayer } from '../hooks/runtime/player';
import H2 from '../typo/h2';

const LazySearchTracks = loadable(() => import('../components/SearchTracks'));
const LazyTrackList = loadable(() => import('../components/TrackList'));
const LazyReactPlayer = loadable(() => import('react-player'));

const FlexContainer = styled.div`
  ${tw`flex w-full flex-col sm:flex-row`}
`;
const FlexContent = styled.div`
  ${tw`md:flex-1`}
`;

const extendYoutubeUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

const Music = ({ offset }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { currentTrack, playing } = usePlayer();

  const url =
    currentTrack && currentTrack.youtubeId
      ? extendYoutubeUrl(currentTrack.youtubeId)
      : '';

  return (
    <Content speed={1} offset={offset}>
      <H2 ref={ref}>Serverless Music Player</H2>
      {inView && (
        <FlexContainer>
          <FlexContent>
            <LazyTrackList
              currentTrackId={currentTrack ? currentTrack.id : ''}
            />
          </FlexContent>
          <FlexContent>
            <LazySearchTracks />
          </FlexContent>
          <FlexContent>
            <LazyReactPlayer
              className="react-player"
              playing={playing}
              url={url}
            />
          </FlexContent>
        </FlexContainer>
      )}
    </Content>
  );
};
export default Music;
