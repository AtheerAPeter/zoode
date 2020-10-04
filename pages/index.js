const Home = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="nav-content">
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
            <div className="logo">
              <h1>منصة زود</h1>
              <img src="/assets/logo.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <img src="/assets/hero.png" alt="" />
              <div className="type">
                <h1>أستثمر نفسك</h1>
                <p>
                  زود هو منصة يستخدمها المبرمجون لحل الأسئلة و الامثلة البرمجية
                  لربح بعض الجوائز الملموسة او الغيير ملموسة.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="logos-links">
          <div className="container">
            <div className="bottom-links">
              <img src="/assets/googleadobe.svg" alt="" />
              <img src="/assets/1.svg" alt="" />
              <img src="/assets/2.svg" alt="" />
              <img src="/assets/3.svg" alt="" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer">
          <div className="social-links">
            <img src="/assets/square.svg" alt="" />
            <img src="/assets/facebook.svg" alt="" />
          </div>
          <p>جميع الحقوق المحفوظة لدى زود 2020</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
