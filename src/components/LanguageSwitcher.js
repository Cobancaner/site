import { useLanguage } from '../contexts/LanguageContext';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bs', name: 'Bosanski', flag: '🇧🇦' }
  ];

  return (
    <div className="language-switcher">
      <div className="language-dropdown">
        <button className="language-button">
          <span className="current-flag">
            {languages.find(lang => lang.code === language)?.flag}
          </span>
        </button>
        <div className="language-options">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
              title={lang.name}
            >
              <span className="flag">{lang.flag}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
