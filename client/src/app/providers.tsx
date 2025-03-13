"use client";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "./(auth)/authProvider";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <StoreProvider>
        <Authenticator.Provider>
          <Auth>{children}</Auth>
        </Authenticator.Provider>
      </StoreProvider>
    </NuqsAdapter>
  );
};
export default Providers;
