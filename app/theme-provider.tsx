"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

function useIsClient() {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const isClient = useIsClient();
  return isClient ? (
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  ) : null;
}
