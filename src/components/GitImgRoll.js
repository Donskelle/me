import './gitimgroll.css';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const ImgWrapper = styled(animated.div)`
  ${tw`w-32 xl:w-48 mx-auto`};
`;

const ImgRoll = styled(animated.div)`
  ${tw`h-auto shadow-lg rounded-full overflow-hidden`};
`;
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calcXys = ({ clientX: x, clientY: y, target }) => {
  const rect = target.getBoundingClientRect();
  return [
    -(y - rect.top - target.offsetHeight / 2) / 4,
    (x - rect.left - target.offsetWidth / 2) / 4,
    1.3,
  ];
};

const GitImgRoll = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gitimg.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const [flipped, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const [{ xys }, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5 },
  }));

  return (
    <ImgWrapper
      style={{ transform: xys.interpolate(trans) }}
      onMouseMove={(event) => {
        set({ xys: calcXys(event) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      onClick={() => setFlip((state) => !state)}
      className="imgWrapper"
    >
      <ImgRoll
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        className="imgRoll"
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </ImgRoll>
      <ImgRoll
        className="imgRoll"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          marginTop: '-100%',
        }}
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </ImgRoll>
    </ImgWrapper>
  );
};

export default GitImgRoll;
