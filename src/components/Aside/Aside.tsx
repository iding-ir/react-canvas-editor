import { useAppSelector } from "../../app/hooks";
import {
  NAVIGATION_ITEMS,
  NavigationItem,
  selectCurrentNavigation,
} from "../../features/navigation";
import { CanvasAside } from "./components/CanvasAside";
import { ExportAside } from "./components/ExportAside/ExportAside";
import { GalleryAside } from "./components/GalleryAside";
import { LineAside } from "./components/LineAside";
import { SettingsAside } from "./components/SettingsAside";
import { TextAside } from "./components/TextAside";

export const Aside = () => {
  const currentNavigation = useAppSelector(selectCurrentNavigation);

  return getAside(currentNavigation);
};

const getAside = (currentNavigation: NavigationItem) => {
  switch (currentNavigation) {
    case NAVIGATION_ITEMS.canvas:
      return <CanvasAside />;
    case NAVIGATION_ITEMS.gallery:
      return <GalleryAside />;
    case NAVIGATION_ITEMS.line:
      return <LineAside />;
    case NAVIGATION_ITEMS.text:
      return <TextAside />;
    case NAVIGATION_ITEMS.export:
      return <ExportAside />;
    case NAVIGATION_ITEMS.settings:
      return <SettingsAside />;
    default:
      return null;
  }
};
