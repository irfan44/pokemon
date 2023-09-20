import Navbar from "./Navbar.tsx";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
