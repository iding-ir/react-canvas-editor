import { KeyboardEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import TextIcon from "../../../../assets/icons/text.svg";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Title } from "../../../../components/Title";
import { addText, selectTextColor, selectTextSize } from "../../text-slice";
import styles from "./TextInput.module.scss";

export const TextInput = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const color = useAppSelector(selectTextColor);
  const size = useAppSelector(selectTextSize);

  const onChange = (text: string) => {
    setText(text);
  };

  const submit = () => {
    dispatch(addText({ id: uuidv4(), content: text, color, size }));
    setText("");
  };

  const onClick = () => {
    submit();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  return (
    <div className={styles.container}>
      <Title text={t("text.input.title")}>{<TextIcon />}</Title>

      <Input
        value={text}
        icon={<TextIcon />}
        placeholder={t("text.input.placeholder")}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => onKeyDown(event)}
      />

      <Button
        label={t("text.input.button")}
        disabled={!text}
        onClick={() => onClick()}
      />
    </div>
  );
};
