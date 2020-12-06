import * as nextRouter from "next/router";

nextRouter.useRouter = () => ({
  route: "/",
  pathname: "/",
});

nextRouter.router = {
  push: () => {},
  prefetch: null,
};
