"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [client] = useState(() => new QueryClient());

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <NextUIProvider>
        <QueryClientProvider client={client}>
          <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        </QueryClientProvider>
      </NextUIProvider>
    )
  );
}
