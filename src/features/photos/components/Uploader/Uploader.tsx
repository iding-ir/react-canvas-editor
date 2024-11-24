import { ReactNode, useCallback } from "react";
import Dropzone from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch } from "../../../../app/hooks";
import { ALLOWED_PHOTO_TYPES } from "../../photos";
import { addPhoto } from "../../photos-slice";

export const Uploader = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        dispatch(
          addPhoto({
            id: uuidv4(),
            src: reader.result as string,
          }),
        );
      };
      reader.readAsDataURL(file);
    });
  }, []);

  return (
    <Dropzone onDrop={onDrop} accept={ALLOWED_PHOTO_TYPES}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />

          {children}
        </div>
      )}
    </Dropzone>
  );
};
