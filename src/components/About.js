function About() {
  const publicUrl = process.env.PUBLIC_URL || '';
  const aboutSrc = `${publicUrl}/img/img1.png`;

  const stats = [
    { number: "5+", label: "Yıllık Deneyim" },
    { number: "50+", label: "Tamamlanan Proje" },
    { number: "100%", label: "Müşteri Memnuniyeti" },
    { number: "24/7", label: "Destek Hizmeti" }
  ];

  const values = [
    {
      icon: "⚙",
      title: "Kalite",
      description: "Her projede en yüksek kalite standartlarını uyguluyoruz."
    },
    {
      icon: "🤝",
      title: "Güven",
      description: "Müşterilerimizle uzun vadeli güven ilişkileri kuruyoruz."
    },
    {
      icon: "♻",
      title: "Sürdürülebilirlik",
      description: "Çevre dostu ve sürdürülebilir yapılar inşa ediyoruz."
    },
    {
      icon: "💡",
      title: "Yenilik",
      description: "Modern teknoloji ve yenilikçi çözümlerle fark yaratıyoruz."
    }
  ];

  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div id="about" className="about-section">
        <div className="container">
          {/* Hero Section */}
          <div className="about-hero">
            <div className="about-content">
              <div className="about-text">
                <h2 className="about-title">Hakkımızda</h2>
                <p className="about-subtitle">
                  2019 yılında İbrahim Çoban tarafından Bosna-Hersek&apos;in Brčko şehrinde kurulan
                  İçtaş Yapı İnşaat doo, inşaat sektöründe güvenilir ve yenilikçi çözümler sunmayı
                  amaçlayan bir firmadır.
                </p>
                <p className="about-description">
                  Kurulduğu günden bu yana kalite, güven ve müşteri memnuniyetini ön planda tutarak
                  büyüyen şirketimiz; Bosna-Hersek&apos;in farklı bölgelerinde fabrika, alışveriş merkezi,
                  depo ve konut projeleri başarıyla gerçekleştirmektedir.
                </p>
              </div>
              <div className="about-image">
                <img
                  alt="İçtaş Yapı İnşaat"
                  src={aboutSrc}
                  onError={(e) => {
                    if (e.currentTarget.src !== aboutSrc) {
                      e.currentTarget.src = aboutSrc;
                    }
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="vision-mission">
            <div className="vision-card">
              <h3 className="card-title">Vizyonumuz</h3>
              <p className="card-description">
                Sürdürülebilir, yenilikçi ve güvenilir inşaat çözümleriyle, yaşam alanlarını geleceğe taşıyan
                öncü bir firma olmak. Topluma değer katan projeler üreterek, modern şehirlerin gelişimine yön veren ve
                uluslararası ölçekte tercih edilen bir marka haline gelmek.
              </p>
            </div>

            <div className="mission-card">
              <h3 className="card-title">Misyonumuz</h3>
              <ul className="mission-list">
                <li>Bosna-Hersek&apos;in farklı bölgelerinde fabrika, AVM, depo ve konut projeleriyle modern ve güvenilir yaşam ve iş alanları inşa etmek.</li>
                <li>Müşterilerimize fonksiyonel, estetik ve uzun ömürlü yapılar sunarak yatırım değerini en üst seviyeye taşımak.</li>
                <li>İnşaat sektöründe kalite, güvenlik ve sürdürülebilirlik ilkelerinden ödün vermeden çalışmak.</li>
                <li>Teknoloji ve mühendisliği bir araya getirerek, çevreye duyarlı ve geleceğe dönük çözümler geliştirmek.</li>
                <li>Çalışanlarımız, iş ortaklarımız ve toplum için değer üreten, şeffaf ve güvene dayalı bir iş anlayışıyla hareket etmek.</li>
              </ul>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h3 className="section-title">Değerlerimiz</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;