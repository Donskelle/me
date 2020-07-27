import loadable from "@loadable/component";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import tw from "tailwind.macro";

import { colors } from "../../tailwind";
import { Content, ContentBG } from "../components/elements";
import { useGithubStars } from "../hooks/static/githubStars";
import H2 from "../typo/h2";
import Subheading from "../typo/subheading";

const LazyRepoList = loadable(() => import("../components/RepoList"));

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;
export default ({ offset }) => {
  const { repos, totalCount } = useGithubStars();
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      <ContentBG bg={colors["indigo-darker"]} offset={offset} speed={0.2} />
      <Content speed={0.4} offset={offset}>
        <Wrapper>
          <H2 ref={ref}>Interessting Repos on Github</H2>
          <Subheading>
            Check out hottest things happing in dev community on my {totalCount}{" "}
            long github star feed
          </Subheading>
          {inView && <LazyRepoList repos={repos} />}
        </Wrapper>
      </Content>
    </>
  );
};
