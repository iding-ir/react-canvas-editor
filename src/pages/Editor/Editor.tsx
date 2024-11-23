import { useTranslation } from "react-i18next";

import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Overview } from "../../components/Overview";
import { Navigation } from "../../features/navigation/components/Navigation";
import { usePersist } from "../../hooks/use-persist";
import { Layout } from "../../layout";

export const Editor = () => {
  usePersist();
  const { t } = useTranslation();

  return (
    <Layout.Section>
      <Layout.Head />

      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Aside>
        <Aside />
      </Layout.Aside>

      <Layout.Header>
        <Header title={t("header.title")} />
      </Layout.Header>

      <Layout.Main>
        <Main />
      </Layout.Main>

      <Layout.Overview>
        <Overview />
      </Layout.Overview>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
