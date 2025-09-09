import Card from "./Card";
function Services() {
  return (
    <div id="services" className="container services">
        <h2 className="main-title text-center">Hizmetler</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Geliştirme" img="card1.png" text="Modern, hızlı ve güvenli web projeleri geliştiriyoruz." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Ticaret Çözümleri" img="card2.png" text="Satışa odaklı, ölçeklenebilir e-ticaret altyapıları kuruyoruz." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Siber Güvenlik" img="card3.png" text="Uygulama ve altyapınız için kapsamlı güvenlik çözümleri sunuyoruz." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
