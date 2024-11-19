import { Icon } from "../../../../components/Icon";
import styles from "./Navigation.module.scss";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  NAVIGATION_ITEMS,
  navigationItems,
  selectCurrentNavigation,
  setNavigation,
} from "../..";

export const Navigation = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const currentNavigation = useAppSelector(selectCurrentNavigation);

  return (
    <ul className={styles.container}>
      {navigationItems.map((item, index) => (
        <li key={index}>
          <Icon
            active={currentNavigation === NAVIGATION_ITEMS[item.id]}
            text={t(item.text)}
            animated
            onClick={() => dispatch(setNavigation(item.id))}
          >
            {item.icon}
          </Icon>
        </li>
      ))}
    </ul>
  );
};
