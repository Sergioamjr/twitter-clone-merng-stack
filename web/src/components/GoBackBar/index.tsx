import * as Styles from "./styles";
import { LeftArrow } from "~icons";
import Link from "next/link";
import SectionTitle from "~components/SectionTitle";
import Button from "~components/Button";
import { colors } from "~theme";

type Props = {
  type?: string;
  woBackBtn?: boolean;
};

export default function GoBackBar({ type, woBackBtn }: Props): JSX.Element {
  return (
    <Styles.GoBack>
      {!woBackBtn && (
        <Link href="/">
          <a>
            <Button variant="ghost" rounded>
              <LeftArrow color={colors.blue} />
            </Button>
          </a>
        </Link>
      )}
      {type && <SectionTitle>{type}</SectionTitle>}
    </Styles.GoBack>
  );
}
