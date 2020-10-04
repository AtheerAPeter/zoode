import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sidebar = useRef("");
  const burgerIcon = useRef("");

  useEffect(() => {
    if (showMenu) {
      sidebar.current.style.width = "300px";
      burgerIcon.current.style.backgroundImage = "url('/assets/close.svg')";
    } else {
      sidebar.current.style.width = "0";
      burgerIcon.current.style.backgroundImage = "url('/assets/menu.svg')";
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
          <button
            ref={burgerIcon}
            onClick={() => setShowMenu(!showMenu)}
            className="burger"
          ></button>

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
