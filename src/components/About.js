function About() {
  const publicUrl = process.env.PUBLIC_URL || '';
  const aboutSrc = `${publicUrl}/img/img1.png`;
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div id="about" className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              alt="about"
              src={aboutSrc}
              onError={(e) => {
                if (e.currentTarget.src !== aboutSrc) {
                  e.currentTarget.src = aboutSrc;
                }
              }}
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">Hakkımızda</h2>
            <p className="main-p">
              2019 yılında İbrahim Çoban tarafından Bosna-Hersek’in Brčko şehrinde kurulan
              İçtaş Yapı İnşaat doo, inşaat sektöründe güvenilir ve yenilikçi çözümler sunmayı
              amaçlayan bir firmadır.
            </p>
            <p className="main-p">
              Kurulduğu günden bu yana kalite, güven ve müşteri memnuniyetini ön planda tutarak
              büyüyen şirketimiz; Bosna-Hersek’in farklı bölgelerinde fabrika, alışveriş merkezi,
              depo ve konut projeleri başarıyla gerçekleştirmektedir.
            </p>
            <p className="main-p">
              İçtaş Yapı İnşaat doo, her projede modern mühendislik anlayışını, estetik tasarımı ve
              sürdürülebilir yapıları bir araya getirerek, hem yatırımcılara hem de topluma kalıcı
              değer kazandırmayı hedeflemektedir.
            </p>
            <h3 className="main-title" style={{fontSize:'1.5rem', marginTop:'1.25rem'}}>Vizyonumuz</h3>
            <p className="main-p">
              Sürdürülebilir, yenilikçi ve güvenilir inşaat çözümleriyle, yaşam alanlarını geleceğe taşıyan
              öncü bir firma olmak. Topluma değer katan projeler üreterek, modern şehirlerin gelişimine yön veren ve
              uluslararası ölçekte tercih edilen bir marka haline gelmek.
            </p>
            <h3 className="main-title" style={{fontSize:'1.5rem', marginTop:'1rem'}}>Misyonumuz</h3>
            <ul className="main-p" style={{paddingLeft:'1.2rem'}}>
              <li>Bosna-Hersek’in farklı bölgelerinde fabrika, AVM, depo ve konut projeleriyle modern ve güvenilir yaşam ve iş alanları inşa etmek.</li>
              <li>Müşterilerimize fonksiyonel, estetik ve uzun ömürlü yapılar sunarak yatırım değerini en üst seviyeye taşımak.</li>
              <li>İnşaat sektöründe kalite, güvenlik ve sürdürülebilirlik ilkelerinden ödün vermeden çalışmak.</li>
              <li>Teknoloji ve mühendisliği bir araya getirerek, çevreye duyarlı ve geleceğe dönük çözümler geliştirmek.</li>
              <li>Çalışanlarımız, iş ortaklarımız ve toplum için değer üreten, şeffaf ve güvene dayalı bir iş anlayışıyla hareket etmek.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
