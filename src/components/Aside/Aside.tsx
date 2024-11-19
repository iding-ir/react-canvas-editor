import { useAppSelector } from "../../app/hooks";
import {
  NAVIGATION_ITEMS,
  NavigationItem,
  selectCurrentNavigation,
} from "../../features/navigation";
import styles from "./Aside.module.scss";
import { BrushAside } from "./components/BrushAside";
import { CanvasAside } from "./components/CanvasAside";
import { DownloadAside } from "./components/DownloadAside";
import { EraserAside } from "./components/EraserAside";
import { GalleryAside } from "./components/GalleryAside";
import { SettingsAside } from "./components/SettingsAside";
import { TextAside } from "./components/TextAside";

export const Aside = () => {
  const currentNavigation = useAppSelector(selectCurrentNavigation);

  return <div className={styles.container}>{getAside(currentNavigation)}</div>;
};

const getAside = (currentNavigation: NavigationItem) => {
  switch (currentNavigation) {
    case NAVIGATION_ITEMS.canvas:
      return <CanvasAside />;
    case NAVIGATION_ITEMS.gallery:
      return <GalleryAside />;
    case NAVIGATION_ITEMS.brush:
      return <BrushAside />;
    case NAVIGATION_ITEMS.eraser:
      return <EraserAside />;
    case NAVIGATION_ITEMS.text:
      return <TextAside />;
    case NAVIGATION_ITEMS.download:
      return <DownloadAside />;
    case NAVIGATION_ITEMS.settings:
      return <SettingsAside />;
    default:
      return null;
  }
};
