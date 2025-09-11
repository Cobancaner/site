import Image from 'next/image';

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
                <h1 className="logo">İÇTAŞ İNŞAAT D.O.O</h1>
                <p className="footer-text">
                  Kalite, güven ve sürdürülebilirlik ilkeleriyle projeler geliştiriyoruz.
                </p>
              </div>
              
            </div>
          </div>
          <div className="side2">
            <div className="row">
              
              <div className="col-md-3">
                <p className="footer-title">Sosyal Medya</p>
                <ul className="social-links">
                  <li>
                    <a
                      className="social-btn instagram"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/ictasyapi/"
                      aria-label="Instagram - ictasyapi"
                    >
                      <span style={{marginRight:'8px'}}>📷</span> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-logo">
        <Image 
          src="/img/img1.png" 
          alt="İÇTAŞ YAPI İNŞAAT" 
          width={80}
          height={80}
          className="footer-bottom-logo-img"
          onError={(e) => {
            console.log('Logo yüklenemedi:', e.target.src);
          }}
        />
      </div>
      <button onClick={() => scrollToId('home')} className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
