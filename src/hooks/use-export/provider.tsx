import Konva from "konva";
import { ReactNode, createContext, useRef } from "react";

import { exportDataUrl } from "../../utils/download-data-url";

export type ExportState = {
  stageRef: React.MutableRefObject<Konva.Stage | null>;
  handleExport: () => void;
};

export const ExportContext = createContext<ExportState | undefined>(undefined);

export const ExportContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const stageRef = useRef<Konva.Stage>(null);

  const handleExport = () => {
    if (!stageRef.current) {
      return;
    }

    exportDataUrl(stageRef.current.toDataURL(), "export.png");
  };

  return (
    <ExportContext.Provider value={{ stageRef, handleExport }}>
      {children}
    </ExportContext.Provider>
  );
};
