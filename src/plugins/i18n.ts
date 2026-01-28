import { createI18n } from 'vue-i18n'
import { messages, defaultLocale, type Locale } from '@/locales'

// Get saved language preference from localStorage
const getSavedLocale = (): Locale => {
  const saved = localStorage.getItem('preferred-language')
  if (saved && (saved === 'en' || saved === 'ar')) {
    return saved as Locale
  }
  return defaultLocale
}

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: getSavedLocale(),
  fallbackLocale: defaultLocale,
  messages,
  globalInjection: true, // Enable $t in templates
  silentTranslationWarn: true,
  silentFallbackWarn: true
})

export default i18n
