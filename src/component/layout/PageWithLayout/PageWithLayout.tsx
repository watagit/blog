import type { ReactElement } from "react";
import { Header } from "@/component/ui/Header";

export const PageWithLayout = (page: ReactElement) => {
  return (
    <>
      <Header />
      <main className="px-3 sm:mx-auto sm:w-7/12">{page}</main>
    </>
  );
};
