"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && <NextUIProvider>{children}</NextUIProvider>;
}
