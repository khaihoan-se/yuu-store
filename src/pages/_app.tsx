import { NextPageWithLayout } from "@/@types/page";
import BaseLayout from "@/components/layouts/BaseLayout";
import "@/styles/index.css";
import type { AppProps } from "next/app";

// this should give a better typing
type NextPageWithLayoutProps = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: NextPageWithLayoutProps) {
  const getLayout =
    // @ts-ignore
    Component.getLayout ||
    ((page: React.ReactNode) => <BaseLayout>{page}</BaseLayout>);
  return getLayout(<Component {...pageProps} />);
}

export default App;
