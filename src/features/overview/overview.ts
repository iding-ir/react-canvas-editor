export const ZOOMS = [25, 50, 100, 150, 200] as const;

export const DEFAULT_ZOOM: Zoom = 100;

export type Zoom = (typeof ZOOMS)[number];
