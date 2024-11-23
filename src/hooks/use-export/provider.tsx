import Konva from "konva";
import { PDFDocument } from "pdf-lib";
import { ReactNode, createContext, useRef } from "react";

import { useAppSelector } from "../../app/hooks";
import { selectCanvasName } from "../../features/canvas";
import { downloadDataUrl } from "../../utils/download-data-url";

export type ExportState = {
  stageRef: React.MutableRefObject<Konva.Stage | null>;
  handleExportJpg: () => void;
  handleExportPng: () => void;
  handleExportPdf: () => void;
};

export const ExportContext = createContext<ExportState | undefined>(undefined);

export const ExportContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const stageRef = useRef<Konva.Stage>(null);
  const name = useAppSelector(selectCanvasName);

  const handleExportPng = () => {
    if (!stageRef.current) {
      return;
    }

    downloadDataUrl(stageRef.current.toDataURL(), `${name}.png`);
  };

  const handleExportJpg = () => {
    if (!stageRef.current) {
      return;
    }

    downloadDataUrl(stageRef.current.toDataURL(), `${name}.jpg`);
  };

  const handleExportPdf = async () => {
    if (!stageRef.current) {
      return;
    }

    const pdfDoc = await PDFDocument.create();
    const width = stageRef.current.width();
    const height = stageRef.current.height();
    const page = pdfDoc.addPage([width, height]);
    const pngImage = await pdfDoc.embedPng(stageRef.current.toDataURL());
    const pngDims = pngImage.scale(1);

    page.drawImage(pngImage, {
      x: page.getWidth() / 2 - pngDims.width / 2,
      y: page.getHeight() / 2 - pngDims.height / 2,
      width: pngDims.width,
      height: pngDims.height,
    });

    const pdfBytes = await pdfDoc.save();

    downloadDataUrl(
      URL.createObjectURL(new Blob([pdfBytes], { type: "application/pdf" })),
      `${name}.pdf`,
    );
  };

  return (
    <ExportContext.Provider
      value={{ stageRef, handleExportJpg, handleExportPng, handleExportPdf }}
    >
      {children}
    </ExportContext.Provider>
  );
};
