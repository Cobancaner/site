import Card from "./Card";
function Services() {
  return (
    <div id="services" className="container services">
        <h2 className="main-title text-center">Hizmetlerimiz</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Card title="Konut İnşaatı" img="card1.png" text="Modern ve konforlu konut projeleri ile hayalinizdeki evi gerçeğe dönüştürüyoruz." />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Card title="Ticari Yapılar" img="card2.png" text="Ofis binaları, alışveriş merkezleri ve ticari kompleksler inşa ediyoruz." />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Card title="Endüstriyel Tesisler" img="card3.png" text="Fabrika, depo ve endüstriyel tesisler için güvenli ve dayanıklı yapılar." />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Card title="Altyapı Projeleri" img="card1.png" text="Yol, köprü, tünel ve diğer altyapı projelerinde uzman ekibimizle hizmet veriyoruz." />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Card title="Renovasyon" img="card2.png" text="Mevcut yapıların yenilenmesi ve modernizasyonu konusunda profesyonel çözümler." />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Card title="Proje Yönetimi" img="card3.png" text="A'dan Z'ye proje yönetimi ile zamanında ve bütçe dostu teslimat garantisi." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
