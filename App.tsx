import React, { useState, useEffect } from 'react';
import { Settings, FileJson, ArrowRight, Github, HelpCircle } from 'lucide-react';
import { Language } from './types';

// Translation Content
const translations = {
  [Language.UKRAINIAN]: {
    title: "Майже готово!",
    description: "Схоже, ви потрапили сюди помилково. Конфігурація вашого застосунку все ще вказує на цей домен-заглушку.",
    whyTitle: "Чому я бачу цю сторінку?",
    whyText: "У вашому коді залишилось посилання на цей домен-заглушку. Вам потрібно оновити конфігурацію, вказавши правильну адресу вашого домену.",
    fixExample: "Приклад виправлення",
    buttonText: "Перейти до коду на GitHub",
    footer: "Не хвилюйтесь, це стандартна процедура налаштування.",
    pageTitle: "Налаштування застосунку"
  },
  [Language.ENGLISH]: {
    title: "Almost there!",
    description: "It looks like you've arrived here by mistake. Your application configuration is still pointing to this placeholder domain.",
    whyTitle: "Why am I seeing this page?",
    whyText: "Your code still references this placeholder domain. You need to update the configuration to point to your actual domain.",
    fixExample: "Fix Example",
    buttonText: "Go to code on GitHub",
    footer: "Don't worry, this is a standard setup procedure.",
    pageTitle: "Application Setup"
  },
  [Language.SPANISH]: {
    title: "¡Ya casi está!",
    description: "Parece que has llegado aquí por error. La configuración de tu aplicación todavía apunta a este dominio de marcador de posición.",
    whyTitle: "¿Por qué veo esta página?",
    whyText: "Tu código todavía contiene una referencia a este dominio de marcador de posición. Necesitas actualizar la configuración para que apunte a tu dominio real.",
    fixExample: "Ejemplo de corrección",
    buttonText: "Ir al código en GitHub",
    footer: "No te preocupes, este es un procedimiento estándar de configuración.",
    pageTitle: "Configuración de la aplicación"
  },
  [Language.FRENCH]: {
    title: "Presque terminé !",
    description: "Il semble que vous soyez arrivé ici par erreur. La configuration de votre application pointe toujours vers ce domaine fictif.",
    whyTitle: "Pourquoi je vois cette page ?",
    whyText: "Votre code contient toujours une référence à ce domaine fictif. Vous devez mettre à jour la configuration pour qu'elle pointe vers votre domaine réel.",
    fixExample: "Exemple de correction",
    buttonText: "Voir le code sur GitHub",
    footer: "Ne vous inquiétez pas, c'est une procédure de configuration standard.",
    pageTitle: "Configuration de l'application"
  },
  [Language.GERMAN]: {
    title: "Fast fertig!",
    description: "Es sieht so aus, als wären Sie versehentlich hier gelandet. Die Konfiguration Ihrer Anwendung verweist immer noch auf diese Platzhalter-Domain.",
    whyTitle: "Warum sehe ich diese Seite?",
    whyText: "Ihr Code enthält noch einen Verweis auf diese Platzhalter-Domain. Sie müssen die Konfiguration aktualisieren, damit sie auf Ihre tatsächliche Domain verweist.",
    fixExample: "Korrekturbeispiel",
    buttonText: "Zum Code auf GitHub",
    footer: "Keine Sorge, das ist ein Standardverfahren bei der Einrichtung.",
    pageTitle: "App-Konfiguration"
  }
};

const langConfig: Record<Language, { label: string }> = {
  [Language.UKRAINIAN]: { label: 'UA' },
  [Language.ENGLISH]: { label: 'EN' },
  [Language.SPANISH]: { label: 'ES' },
  [Language.FRENCH]: { label: 'FR' },
  [Language.GERMAN]: { label: 'DE' },
};

const getBrowserLanguage = (): Language => {
  if (typeof navigator === 'undefined') return Language.ENGLISH;
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('uk')) return Language.UKRAINIAN;
  if (browserLang.startsWith('en')) return Language.ENGLISH;
  if (browserLang.startsWith('es')) return Language.SPANISH;
  if (browserLang.startsWith('fr')) return Language.FRENCH;
  if (browserLang.startsWith('de')) return Language.GERMAN;
  
  return Language.ENGLISH;
};

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => getBrowserLanguage());
  const t = translations[currentLang];

  useEffect(() => {
    document.title = t.pageTitle;
  }, [currentLang, t.pageTitle]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-6 font-sans relative">
      
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-full shadow-sm border border-slate-200 p-1 flex items-center gap-1 z-10">
        {Object.values(Language).map((lang) => (
          <button
            key={lang}
            onClick={() => setCurrentLang(lang)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              currentLang === lang 
                ? 'bg-slate-900 text-white shadow-sm' 
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
            }`}
          >
            {langConfig[lang].label}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mt-8 sm:mt-0">
        
        {/* Header Section */}
        <div className="bg-white p-8 pb-0 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform duration-300">
            <Settings className="w-8 h-8 text-blue-600" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            {t.title}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            {t.description}
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-10 space-y-8">
          
          {/* Helpful Info Box */}
          <div className="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-900">
            <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
            <div className="text-sm">
              <strong>{t.whyTitle}</strong>
              <p className="mt-1 opacity-90">
                {t.whyText}
              </p>
            </div>
          </div>

          {/* Code Snippet */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 uppercase tracking-wider px-1">
              <span>{t.fixExample}</span>
              <span className="flex items-center gap-1"><FileJson className="w-3 h-3" /> config.ts</span>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-5 font-mono text-sm shadow-inner overflow-hidden">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 text-slate-500">
                  <span className="select-none w-6 text-right opacity-50">1</span>
                  <span>export const config = &#123;</span>
                </div>
                
                {/* Deleted Line */}
                <div className="flex gap-3 bg-red-500/10 -mx-5 px-5 py-1 text-red-300">
                  <span className="select-none w-6 text-right opacity-50 text-red-500">-</span>
                  <span>  baseUrl: 'https://placeholder-domain.com',</span>
                </div>

                {/* Added Line */}
                <div className="flex gap-3 bg-green-500/10 -mx-5 px-5 py-1 text-green-300">
                  <span className="select-none w-6 text-right opacity-50 text-green-500">+</span>
                  <span>  baseUrl: 'https://your-project.com',</span>
                </div>

                <div className="flex gap-3 text-slate-500">
                  <span className="select-none w-6 text-right opacity-50">4</span>
                  <span>&#125;;</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <p className="mt-8 text-center text-sm text-slate-400 font-medium">
        {t.footer}
      </p>
    </div>
  );
};

export default App;