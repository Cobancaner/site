import { useLanguage } from '../contexts/LanguageContext';

function References() {
  const { t } = useLanguage();
  const publicUrl = process.env.PUBLIC_URL || '';
  
  const references = [
    {
      image: `${publicUrl}/referance/bau_partner.jpg`,
      title: t('references.bauPartner.title'),
      description: t('references.bauPartner.description')
    },
    {
      image: `${publicUrl}/referance/temax.jpg`,
      title: t('references.temax.title'),
      description: t('references.temax.description')
    },
    {
      image: `${publicUrl}/referance/bb.jpg`,
      title: t('references.bbProjects.title'),
      description: t('references.bbProjects.description')
    }
  ];

  return (
    <div id="references" className="container references">
      <h2 className="main-title text-center">{t('references.title')}</h2>
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
