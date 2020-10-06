import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sidebar = useRef("");
  const burgerIcon = useRef("");

  useEffect(() => {
    if (showMenu) {
      sidebar.current.style.width = "300px";
      sidebar.current.style.animation = "slidein 0.5s ease forwards";
      burgerIcon.current.style.backgroundImage = "url('/assets/close.svg')";
      burgerIcon.current.style.position = "fixed";
    } else {
      sidebar.current.style.width = "0";
      sidebar.current.style.animation = "slideout 0.5s ease";
      burgerIcon.current.style.backgroundImage = "url('/assets/menu.svg')";
      burgerIcon.current.style.position = "relative";
    }
  }, [showMenu]);

  return (
    <header>
      <div className="container">
        <div className="nav-content">
          <div className="burger-div" ref={sidebar}>
            <div className="buttons">
              <button className="login-btn">تسجيل الدخول</button>
              <button className="register-btn">أنشاء حساب</button>
            </div>
            <ul className="nav-links">
              <li>تواصل معنا</li>
              <li>المدونة</li>
              <li>ألاسعار</li>
              <li>الرئيسية</li>
            </ul>
          </div>
          <div className="burger-container">
            <button
              ref={burgerIcon}
              onClick={() => setShowMenu(!showMenu)}
              className="burger"
            ></button>
          </div>

          <div className="logo">
            <h1>منصة زود</h1>
            <img src="/assets/logo.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
