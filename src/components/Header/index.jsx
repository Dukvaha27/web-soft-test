import React from "react";
import "./headerStyles.scss";
import logo from "../../assests/web-soft.png"
import {Link, useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
  return <header>
      <div className={"header-item"}>
          <Link to={"/catalog"}>
              Каталог
          </Link>
      </div>
      <div className={"header-item"} onClick={() => navigate('/')}>
          <img src={logo} alt=""/>
      </div>
  </header>;
};

export default Header;
