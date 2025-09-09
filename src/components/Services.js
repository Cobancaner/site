function Services() {
  const services = [
    {
      image: "card1.png",
      title: "Konut İnşaatı",
      description: "Modern ve konforlu konut projeleri ile hayalinizdeki evi gerçeğe dönüştürüyoruz."
    },
    {
      image: "card2.png",
      title: "Ticari Yapılar",
      description: "Ofis binaları, alışveriş merkezleri ve ticari kompleksler inşa ediyoruz."
    },
    {
      image: "card3.png",
      title: "Endüstriyel Tesisler",
      description: "Fabrika, depo ve endüstriyel tesisler için güvenli ve dayanıklı yapılar."
    },
    {
      image: "card1.png",
      title: "Altyapı Projeleri",
      description: "Yol, köprü, tünel ve diğer altyapı projelerinde uzman ekibimizle hizmet veriyoruz."
    },
    {
      image: "card2.png",
      title: "Renovasyon",
      description: "Mevcut yapıların yenilenmesi ve modernizasyonu konusunda profesyonel çözümler."
    },
    {
      image: "card3.png",
      title: "Proje Yönetimi",
      description: "A'dan Z'ye proje yönetimi ile zamanında ve bütçe dostu teslimat garantisi."
    }
  ];

  return (
    <div id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">Hizmetlerimiz</h2>
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
