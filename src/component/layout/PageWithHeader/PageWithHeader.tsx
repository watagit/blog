import type { ReactElement } from "react";
import { Header } from "@/component/ui/Header";

export const PageWithHeader = (page: ReactElement) => {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
