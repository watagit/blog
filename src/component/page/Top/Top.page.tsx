import type { FC } from "react";
import { Top } from "./Top";
import { Header } from "@/component/ui/Header";

export const TopPage: FC = () => {
  return (
    <>
      <Header />
      <Top />
    </>
  );
};
