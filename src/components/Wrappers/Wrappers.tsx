import { ReactNode } from "react";

import { StoreProvider } from "../../app/storeProvider";
import { ExportContextProvider } from "../../hooks/use-export";

export const Wrappers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <ExportContextProvider>{children}</ExportContextProvider>
    </StoreProvider>
  );
};
