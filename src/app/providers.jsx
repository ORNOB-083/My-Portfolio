"use client";

import { NextUIProvider } from "@nextui-org/react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </NextUIProvider>
  );
}