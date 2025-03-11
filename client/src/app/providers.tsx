"use client";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import StoreProvider from "@/state/redux";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <StoreProvider>{children}</StoreProvider>
    </NuqsAdapter>
  );
};
export default Providers;
