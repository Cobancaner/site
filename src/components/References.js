function References() {
  const publicUrl = process.env.PUBLIC_URL || '';
  
  const references = [
    {
      image: `${publicUrl}/referance/bau_partner.jpg`,
      title: "Bau Partner",
      description: "Endüstriyel tesis projelerinde güvenilir iş ortağımız"
    },
    {
      image: `${publicUrl}/referance/temax.jpg`,
      title: "Temax",
      description: "Modern ve sürdürülebilir yapı çözümleri"
    },
    {
      image: `${publicUrl}/referance/bb.jpg`,
      title: "BB Projeleri",
      description: "Başarıyla tamamlanan konut ve ticari projeler"
    }
  ];

  return (
    <div id="references" className="container references">
      <h2 className="main-title text-center">Referanslarımız</h2>
      <div className="references-content">
        <div className="col-md-12">
          <div className="row">
            {references.map((ref, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="reference-card">
                  <div className="reference-image">
                    <img 
                      src={ref.image} 
                      alt="referans görseli"
                      onError={(e) => {
                        if (e.currentTarget.src !== ref.image) {
                          e.currentTarget.src = ref.image;
                        }
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
