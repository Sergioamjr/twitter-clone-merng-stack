import * as Styles from "./styles";

const animate = {
  y: [20, 0, 0, 0],
  opacity: [0, 1, 1, 1],
};

const transition = {
  duration: 3,
  times: [0, 0.2, 0.8, 1],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

export default function Intro(): JSX.Element {
  return (
    <Styles.Wrapper variants={container} initial="hidden" animate="show">
      <Styles.Text animate={animate} transition={transition}>
        It seems it&apos;s your first time here :)
      </Styles.Text>
      <Styles.Text animate={animate} transition={{ ...transition, delay: 3 }}>
        Let me create a random user for you...
      </Styles.Text>
      <Styles.Text animate={animate} transition={{ ...transition, delay: 6 }}>
        Done, you will be <span>@chandra_clyve</span>
      </Styles.Text>
      <Styles.Text animate={animate} transition={{ ...transition, delay: 8 }}>
        Sending you to the home page
      </Styles.Text>
    </Styles.Wrapper>
  );
}
