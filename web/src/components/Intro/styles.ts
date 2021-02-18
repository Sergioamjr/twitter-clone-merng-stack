import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fontSizes } from "~theme";

export const Text = styled(motion.p)`
  color: ${colors.white};
  font-size: ${fontSizes.normal};
  font-weight: 200;
  margin-bottom: 15px;
  span {
    font-weight: bold;
  }
`;

export const Wrapper = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
