import { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
};

const PageHeader = ({ title, icon, children }: PageHeaderProps) => {
  return (
    <div className="flex items-center space-x-2 mb-6 justify-between">
      <div>
        <h1 className="flex items-center space-x-1 font-bold text-2xl">
          <span>{icon}</span>
          <span>{title}</span>
        </h1>
      </div>
      {children}
    </div>
  );
};

export default PageHeader;
