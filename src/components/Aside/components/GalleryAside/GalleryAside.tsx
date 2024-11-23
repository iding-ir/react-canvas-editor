import { useTranslation } from "react-i18next";

import UploadIcon from "../../../../assets/icons/upload.svg";
import { Uploader } from "../../../../features/gallery/components/Uploader";
import { Form } from "../../../Form/Form";
import { Button } from "../../../Form/components/Button";
import { Field } from "../../../Form/components/Field";
import { Gallery } from "../../../Gallery";
import asideStyles from "../Aside.module.scss";

export const GalleryAside = () => {
  const { t } = useTranslation();

  return (
    <div className={asideStyles.container}>
      <Form>
        <Field legend={t("gallery.title")} icon={<UploadIcon />}>
          <Uploader>
            <Button onClick={() => null} label={t("gallery.choose")} />
          </Uploader>
        </Field>
      </Form>

      <Gallery />
    </div>
  );
};
