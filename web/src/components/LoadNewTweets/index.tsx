import { useEffect } from "react";
import gsap from "gsap";
import ButtonBase from "~components/Button";
import styled from "styled-components";

type Props = {
  label: string;
  onClick: () => void;
};

export default function LoadNewTweets({ label, onClick }: Props): JSX.Element {
  useEffect(() => {
    gsap.from(".new-tweets-btn", {
      y: 20,
      opacity: 0,
    });
  }, []);
  return (
    <Wrapper className="new-tweets-btn">
      <Button onClick={onClick}>{label}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Button = styled(ButtonBase)`
    position: absolute;
    top: -42px;
}`;
