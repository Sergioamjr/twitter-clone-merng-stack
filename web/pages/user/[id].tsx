import { useRouter } from "next/router";
import { Page, Column } from "~components/template";

export default function User(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Page>
      <Column />
      <Column>
        <div>Usuário {id}</div>
      </Column>
      <Column />
    </Page>
  );
}
