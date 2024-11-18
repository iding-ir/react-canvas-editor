import { Icon } from "../Icon";
import styles from "./Navigation.module.scss";
import UploadIcon from "../../assets/icons/upload.svg";
import BrushIcon from "../../assets/icons/brush.svg";
import TextIcon from "../../assets/icons/text.svg";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Icon
            text={t("navigation.upload")}
            animated
            onClick={() => console.log("upload")}
          >
            <UploadIcon />
          </Icon>
        </li>
        <li>
          <Icon
            text={t("navigation.brush")}
            animated
            onClick={() => console.log("brush")}
          >
            <BrushIcon />
          </Icon>
        </li>
        <li>
          <Icon
            text={t("navigation.text")}
            animated
            onClick={() => console.log("text")}
          >
            <TextIcon />
          </Icon>
        </li>
      </ul>
    </nav>
  );
};
