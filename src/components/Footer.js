function Footer() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">İÇTAŞ İNŞAAT</h1>
                <p className="footer-text">
                  Kalite, güven ve sürdürülebilirlik ilkeleriyle projeler geliştiriyoruz.
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Önemli Bağlantılar</p>
                <ul>
                  <li>
                  <button   
                         onClick={() => scrollToId('home')}
                         style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
                  > Anasayfa </button>
                  </li>
                  <li>
                  <button onClick={() => scrollToId('services')} style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}> Hizmetler </button>
                  </li>
                  <li>
                  <button onClick={() => scrollToId('about')} style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}> Hakkımızda  </button>
                  </li>
                  <li>
                  <button onClick={() => scrollToId('contact')} style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}> İletişim  </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">İletişim</p>
                <ul>
                  <li>
                    <button style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}>burhankcd@gmail.com</button>
                  </li>
                  <li>
                    <button style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}> Burhan #3265</button>
                  </li>
                  <li>
                    <button style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit" }}>0212 444 44 44</button>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Sosyal Medya</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/darkleas" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/burhankocadag0" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"> Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scrollToId('home')} className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
