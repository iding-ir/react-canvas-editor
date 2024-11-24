export type PhotoType = {
  id: string;
  src: string;
};

export const ALLOWED_PHOTO_TYPES = {
  "image/png": [".png"],
  "image/jpeg": [".jpeg", ".jpg"],
};
