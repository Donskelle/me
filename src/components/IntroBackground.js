import styled from 'styled-components';
import tw from 'tailwind.macro';

import { ContentBG } from './elements';

const IntroBackground = styled(ContentBG)`
  animation: gradientBgAnimation 15s ease infinite alternate;
  background: linear-gradient(45deg, #0a224e, transparent),
    repeating-linear-gradient(
      45deg,
      #6cb2eb 0%,
      #6cb2eb 5%,
      transparent 5%,
      transparent 10%
    ),
      #2779bd
      repeating-linear-gradient(
        -45deg,
        #2779bd 0%,
        #2779bd 5%,
        transparent 5%,
        transparent 10%
      );

  @keyframes gradientBgAnimation {
    0% {
      background-size: 100% 100%;
    }
    100% {
      background-size: 110% 110%;
    }
  }
`;
export { IntroBackground };
