import { useEffect } from 'react';

function Navbar() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const gotop = document.querySelector(".gotop");
      const nav = document.querySelector(".navbar");
      if (!gotop || !nav) return;
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? 690 : 220;
      if (window.scrollY > threshold) {
        gotop.classList.add("display");
        nav.classList.add("navopened");
      } else {
        gotop.classList.remove("display");
        nav.classList.remove("navopened");
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          
          <ul className="bar">
            <li>
              <button
                onClick={() => {
                  openBar();
                  scrollToId('home');
                }}
                style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
              >
                Anasayfa
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  openBar();
                  scrollToId('about');
                }}
                style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
              >
                Hakkımızda
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  openBar();
                  scrollToId('services');
                }}
                style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
              >
                Hizmetler
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  openBar();
                  scrollToId('references');
                }}
                style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
              >
                Referanslar
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  openBar();
                  scrollToId('contact');
                }}
                style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
              >
                İletişim
              </button>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
