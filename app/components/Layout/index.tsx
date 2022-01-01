import React from "react";
import Header from "~/components/Header";

const Layout: React.FunctionComponent = ({children}) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
