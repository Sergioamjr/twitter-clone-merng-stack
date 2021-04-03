import * as Styles from "./styles";
import { LeftArrow } from "~icons";
import Button from "~components/Button";
import { colors } from "~theme";
import Link from "next/link";

type Props = {
  type: string;
};

export default function GoBackBar({ type }: Props): JSX.Element {
  return (
    <Styles.GoBack>
      <Link href="/">
        <a>
          <Button variant="ghost" rounded>
            <LeftArrow color={colors.blue} />
          </Button>
        </a>
      </Link>
      {type && <Styles.Page>{type}</Styles.Page>}
    </Styles.GoBack>
  );
}
