import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import Icon from "../../../assets/icons/zoom.svg";
import { Select } from "../../../components/Select";
import { ZOOMS, Zoom } from "../overview";
import { selectZoom, setZoom } from "../overview-slice";

export const ZoomSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const zoom = useSelector(selectZoom);

  const items = Object.values(ZOOMS).map((zoom) => ({
    value: String(zoom),
    label: t(`overview.zoom.options.${zoom}`),
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setZoom(Number(event.target.value) as Zoom));
  };

  return (
    <Select
      id="zoom-selector"
      items={items}
      value={String(zoom)}
      icon={<Icon />}
      label={t("overview.zoom.label")}
      onChange={handleChange}
      direction="horizontal"
    />
  );
};
