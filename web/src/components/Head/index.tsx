import HeadBase from "next/head";

type Props = {
  isProduction: boolean;
  GA_TRACKING_ID: string;
};

export default function Head({
  isProduction,
  GA_TRACKING_ID,
}: Props): JSX.Element {
  return (
    <HeadBase>
      <title>Explore / Twitter</title>
      <link rel="icon" href="/favicon.ico" />
      {isProduction && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${GA_TRACKING_ID});`,
            }}
          />
        </>
      )}
    </HeadBase>
  );
}
