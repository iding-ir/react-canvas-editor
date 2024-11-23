import { Helmet } from "react-helmet-async";

import { useHead } from "../../hooks/use-head";

export const Head = () => {
  const { appName, title, description } = useHead();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link
        rel="icon"
        type="image/png"
        href="/assets/favicon/favicon-48x48.png"
        sizes="48x48"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/assets/favicon/favicon.svg"
      />
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content={appName} />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
    </Helmet>
  );
};
