import { useLanguage } from '../contexts/LanguageContext';

function About() {
  const { t, isLoading } = useLanguage();
  const publicUrl = process.env.PUBLIC_URL || '';
  const aboutSrc = `${publicUrl}/img/img1.png`;

  const stats = [
    { number: "5+", label: t('about.stats.experience') },
    { number: "50+", label: t('about.stats.projects') },
    { number: "100%", label: t('about.stats.satisfaction') },
    { number: "7/24", label: t('about.stats.support') }
  ];

  const values = [
    {
      icon: "⚙",
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: "🤝",
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description')
    },
    {
      icon: "♻",
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.description')
    },
    {
      icon: "💡",
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
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
                <h2 className="about-title">{t('about.title')}</h2>
                <p className="about-subtitle">
                  {t('about.subtitle')}
                </p>
                <p className="about-description">
                  {t('about.description')}
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
              <h3 className="card-title">{t('about.vision.title')}</h3>
              <p className="card-description">
                {t('about.vision.description')}
              </p>
            </div>

            <div className="mission-card">
              <h3 className="card-title">{t('about.mission.title')}</h3>
              <ul className="mission-list">
                {!isLoading && Array.isArray(t('about.mission.items')) && t('about.mission.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h3 className="section-title">{t('about.values.title')}</h3>
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