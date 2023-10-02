"use client";
import { useSetInitialEventData } from "@/domains/events/hooks";
import ThemeClient from "@/styles/theme";

const RootWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  useSetInitialEventData();

  return <ThemeClient>{children}</ThemeClient>;
};

export default RootWrapper;
