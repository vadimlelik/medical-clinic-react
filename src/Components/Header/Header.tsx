import React, { useContext } from "react";
import { AppContext, IAppContext } from "../../context/AppContext";
import { HeaderProps } from "./HeaderProps";

const Header = (props: HeaderProps): JSX.Element => {
  const { menu } = useContext<IAppContext>(AppContext);

  return <div>Header{menu}</div>;
};

export default Header;
