import { ReactNode } from "react";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="container min-h-screen flex flex-col mx-auto px-4 lg:px-16 xl:px-32">
      <Navbar />
      <div className="py-3 grow">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
