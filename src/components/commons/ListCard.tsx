import { ReactNode } from "react";

type ListCardProps = {
  children: ReactNode;
};

const ListCard = ({ children }: ListCardProps) => {
  return (
    <div className="px-2 py-1 border rounded-lg font-medium">{children}</div>
  );
};

export default ListCard;
