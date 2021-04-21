import gsap from "gsap";
import { useEffect } from "react";
import { connect } from "react-redux";
import { LoggedUser } from "~graphql/generated/graphql";
import * as Styles from "./styles";

type Props = {
  user: LoggedUser;
  onCompleteAnimation: () => void;
};

function Intro(props: Props): JSX.Element {
  useEffect(() => {
    const tl = gsap.timeline();
    const texts = document.querySelectorAll("p");
    tl.from(texts[0], { duration: 0.5, y: 50, opacity: 0 })
      .from(texts[1], { duration: 0.5, y: 50, opacity: 0, delay: 2 })
      .from(texts[2], { duration: 0.5, y: 50, opacity: 0, delay: 3 })
      .from(texts[3], { duration: 0.5, y: 50, opacity: 0, delay: 1 })
      .then(() => setTimeout(props.onCompleteAnimation, 1000));
  }, []);
  return (
    <Styles.Wrapper>
      <Styles.Text>It seems it&apos;s your first time here.</Styles.Text>
      <Styles.Text>Let&apos;s create a random user for you.</Styles.Text>
      <Styles.Text>
        Done, you will be <span>@{props.user.userName}.</span>
      </Styles.Text>
      <Styles.Text>Sending you to the home page.</Styles.Text>
    </Styles.Wrapper>
  );
}

export default connect(({ user }: Props, props) => ({ user, ...props }))(Intro);
