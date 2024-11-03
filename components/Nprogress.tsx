"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="5px"
        color="#faa61e"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
