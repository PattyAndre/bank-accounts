import { FC, ReactNode } from "react";

interface AppCardProps {
  children: ReactNode;
}

export const AppCard: FC<AppCardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
