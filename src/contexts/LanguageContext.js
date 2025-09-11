import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr');
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Dil değiştiğinde çevirileri yükle
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translationModule = await import(`../translations/${language}.json`);
        setTranslations(translationModule.default || translationModule);
      } catch (error) {
        console.error(`Çeviri dosyası yüklenemedi: ${language}`, error);
        // Hata durumunda Türkçe'ye geri dön
        if (language !== 'tr') {
          const fallbackModule = await import('../translations/tr.json');
          setTranslations(fallbackModule.default || fallbackModule);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  // LocalStorage'dan dil tercihini yükle
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && ['tr', 'en', 'bs'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Dil değiştirme fonksiyonu
  const changeLanguage = (newLanguage) => {
    if (['tr', 'en', 'bs'].includes(newLanguage)) {
      setLanguage(newLanguage);
      localStorage.setItem('selectedLanguage', newLanguage);
    }
  };

  // Çeviri fonksiyonu
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Çeviri bulunamadı: ${key}`);
        return key; // Çeviri bulunamazsa anahtarı döndür
      }
    }
    
    // Eğer value undefined veya null ise, key'i döndür
    if (value === undefined || value === null) {
      console.warn(`Çeviri değeri bulunamadı: ${key}`);
      return key;
    }
    
    return value;
  };

  const value = {
    language,
    changeLanguage,
    t,
    translations,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
