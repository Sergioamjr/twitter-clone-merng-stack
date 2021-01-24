import * as Styles from "./styles";
import { LeftArrow } from "~icons";
import Button from "~components/button";
import { colors } from "~theme";
import Link from "next/link";

export default function GoBackBar(): JSX.Element {
  return (
    <Styles.GoBack>
      <Link href="/">
        <a>
          <Button variant="ghost" rounded>
            <LeftArrow color={colors.blue} />
          </Button>
        </a>
      </Link>
    </Styles.GoBack>
  );
}
