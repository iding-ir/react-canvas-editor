import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

import { StoreProvider } from "../../app/storeProvider";
import { ExportContextProvider } from "../../hooks/use-export";

export const Wrappers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <HelmetProvider>
        <ExportContextProvider>{children}</ExportContextProvider>
      </HelmetProvider>
    </StoreProvider>
  );
};
