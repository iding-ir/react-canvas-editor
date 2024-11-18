import { Icon } from "../Icon";
import styles from "./Navigation.module.scss";
import UploadIcon from "../../assets/icons/upload.svg";
import BrushIcon from "../../assets/icons/brush.svg";
import TextIcon from "../../assets/icons/text.svg";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import Dropzone from "react-dropzone";

export const Navigation = () => {
  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Icon
                  text={t("navigation.upload")}
                  animated
                  onClick={() => console.log("upload")}
                >
                  <UploadIcon />
                </Icon>
              </div>
            )}
          </Dropzone>
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
