import { useContext } from "react";

import { ExportContext } from "./provider";

export const useExportContext = () => {
  const context = useContext(ExportContext);

  if (!context) {
    throw new Error(
      "useExportContext must be used within a ExportContextProvider",
    );
  }

  return context;
};
