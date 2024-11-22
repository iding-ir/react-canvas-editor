import CanvasIcon from "../../assets/icons/canvas.svg";
import DownloadIcon from "../../assets/icons/download.svg";
import GalleryIcon from "../../assets/icons/gallery.svg";
import LineIcon from "../../assets/icons/line.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import TextIcon from "../../assets/icons/text.svg";

export enum NAVIGATION_ITEMS {
  canvas = "canvas",
  gallery = "gallery",
  line = "line",
  text = "text",
  download = "download",
  settings = "settings",
}

export const DEFAULT_NAVIGATION = NAVIGATION_ITEMS.gallery;

export type NavigationItem = keyof typeof NAVIGATION_ITEMS;

export const navigationItems = [
  {
    id: NAVIGATION_ITEMS.canvas,
    icon: <CanvasIcon />,
    text: "navigation.canvas",
  },
  {
    id: NAVIGATION_ITEMS.gallery,
    icon: <GalleryIcon />,
    text: "navigation.gallery",
  },
  {
    id: NAVIGATION_ITEMS.line,
    icon: <LineIcon />,
    text: "navigation.line",
  },
  {
    id: NAVIGATION_ITEMS.text,
    icon: <TextIcon />,
    text: "navigation.text",
  },
  {
    id: NAVIGATION_ITEMS.download,
    icon: <DownloadIcon />,
    text: "navigation.download",
  },
  {
    id: NAVIGATION_ITEMS.settings,
    icon: <SettingsIcon />,
    text: "navigation.settings",
  },
];
