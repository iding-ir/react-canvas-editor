import { Icon } from "../Icon";
import styles from "./Navigation.module.scss";
import UploadIcon from "../../assets/icons/upload.svg";
import BrushIcon from "../../assets/icons/brush.svg";
import EraserIcon from "../../assets/icons/eraser.svg";
import TextIcon from "../../assets/icons/text.svg";
import { useTranslation } from "react-i18next";

import { Uploader } from "../../features/gallery/components/Uploader";
import { useAppDispatch } from "../../app/hooks";
import { setTool } from "../../features/canvas";

export const Navigation = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.container}>
      <li>
        <Uploader>
          <Icon text={t("navigation.upload")} animated>
            <UploadIcon />
          </Icon>
        </Uploader>
      </li>
      <li>
        <Icon
          text={t("navigation.brush")}
          animated
          onClick={() => dispatch(setTool("pen"))}
        >
          <BrushIcon />
        </Icon>
      </li>
      <li>
        <Icon
          text={t("navigation.eraser")}
          animated
          onClick={() => dispatch(setTool("eraser"))}
        >
          <EraserIcon />
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
  );
};
