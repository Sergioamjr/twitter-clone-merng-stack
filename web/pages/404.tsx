import GoBackBar from "~components/GoBackBar";
import Template from "~components/Template";
import UserNotFound from "~components/UserNotFound";

export default function NotFound(): JSX.Element {
  return (
    <Template>
      <GoBackBar />
      <UserNotFound type="Page" />
    </Template>
  );
}
