import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Input } from "../../../../components/Input";
import styles from "./TextInput.module.scss";
import { Button } from "../../../../components/Button";
import { useState } from "react";
import TextIcon from "../../../../assets/icons/text.svg";
import { addText, selectTextColor, selectTextSize } from "../../text-slice";
import { Title } from "../../../../components/Title";

export const TextInput = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const color = useAppSelector(selectTextColor);
  const size = useAppSelector(selectTextSize);

  const onChange = (text: string) => {
    setText(text);
  };

  const onClick = (text: string) => {
    dispatch(addText({ text, color, size }));
    setText("");
  };

  return (
    <div className={styles.container}>
      <Title text={t("text.input.title")}>{<TextIcon />}</Title>

      <Input
        value={text}
        icon={<TextIcon />}
        placeholder={t("text.input.placeholder")}
        onChange={(event) => onChange(event.target.value)}
      />

      <Button
        label={t("text.input.button")}
        disabled={!text}
        onClick={() => onClick(text)}
      />
    </div>
  );
};
