import React, { createContext, useState, useContext } from 'react';
const LanguageContext = createContext();

const translations = {
  English: {
    name: 'English',
    welcome: 'Learn in English',
    description: 'Select your preferred language',
  },
  Tamil: {
    name: 'தமிழ்',
    welcome: 'தமிழில் கற்றுக்கொள்ளுங்கள்',
    description: 'உங்கள் விருப்ப மொழியைத் தேர்வு செய்யுங்கள்',

  },
  Hindi: {
    name: 'हिन्दी',
    welcome: 'हिंदी में सीखें',
    description: 'अपनी पसंदीदा भाषा चुनें',
  }
};

// Language Provider Component
const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Welcome Component
const WelcomeMessage = () => {
  const { currentLanguage, translations } = useLanguage();
  
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold mb-15 text-indigo-900">
        {translations[currentLanguage].name}
      </h1>
      <div className="bg-slate-100 p-6 rounded-lg max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">
          {translations[currentLanguage].welcome}
        </h2>
        <p className="text-xl text-slate-600">
          {translations[currentLanguage].description}
        </p>
      </div>
    </div>
  );
};

// Language Selector Component
const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, translations } = useLanguage();
  const languages = ['English', 'Tamil', 'Hindi'];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto mt-8">
      <div className="flex justify-center space-x-4">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
              currentLanguage === lang 
                ? 'bg-indigo-500 text-white scale-105 shadow-xl' 
                : 'bg-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {translations[lang].name}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main App Component
const LanguageApp = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-2xl">
          <WelcomeMessage />
          <LanguageSelector />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default LanguageApp;