//components import
import Header from "../components/header";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <Header />
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

      <Footer />
    </>
  );
};

export default Home;
