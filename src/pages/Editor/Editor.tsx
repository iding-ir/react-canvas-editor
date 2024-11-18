import { Layout } from "../../layout";
import { Navigation } from "../../components/Navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useTranslation } from "react-i18next";
import { Main } from "../../components/Main";

export const Editor = () => {
  const { t } = useTranslation();

  return (
    <Layout.Section>
      <Layout.Navigation>
        <Navigation />
      </Layout.Navigation>

      <Layout.Header>
        <Header title={t("header.title")} />
      </Layout.Header>

      <Layout.Main>
        <Main />
      </Layout.Main>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Section>
  );
};
