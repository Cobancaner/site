import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Header() {
  const { t } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);
  const videoSrc = '/video.mp4';
  const posterSrc = '/img/img1.png';

  const handleVideoLoad = () => {
    console.log('Video yüklendi');
  };

  const handleVideoError = (error) => {
    console.error('Video yüklenirken hata:', error);
    setVideoFailed(true);
  };

  return (
    <header id="home">
      {!videoFailed ? (
        <video 
          src={videoSrc}
          loop 
          autoPlay 
          muted 
          playsInline
          preload="auto"
          poster={posterSrc}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          style={{ objectFit: 'cover' }}
        >
          <source src={videoSrc} type="video/mp4" />
          {t('header.videoError')}
        </video>
      ) : (
        <img src={posterSrc} alt="video fallback" className="video-fallback" />
      )}
      <div className="header-content">
        <h1>{t('header.title')}</h1>
      </div>
       
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
