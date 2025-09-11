import { useLanguage } from '../contexts/LanguageContext';

function Services() {
  const { t } = useLanguage();
  const services = [
    {
      image: "card1.png",
      title: t('services.residential.title'),
      description: t('services.residential.description')
    },
    {
      image: "card2.png",
      title: t('services.commercial.title'),
      description: t('services.commercial.description')
    },
    {
      image: "card3.png",
      title: t('services.industrial.title'),
      description: t('services.industrial.description')
    },
    {
      image: "card1.png",
      title: t('services.infrastructure.title'),
      description: t('services.infrastructure.description')
    },
    {
      image: "card2.png",
      title: t('services.renovation.title'),
      description: t('services.renovation.description')
    },
    {
      image: "card3.png",
      title: t('services.projectManagement.title'),
      description: t('services.projectManagement.description')
    }
  ];

  return (
    <div id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">{t('services.title')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={`/img/${service.image}`} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
