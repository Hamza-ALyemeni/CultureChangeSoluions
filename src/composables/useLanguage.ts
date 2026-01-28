import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/locales'

const STORAGE_KEY = 'preferred-language'

export function useLanguage() {
  const { locale } = useI18n()

  // Current locale as computed property
  const currentLocale = computed(() => locale.value as Locale)

  // Check if current language is RTL (Arabic)
  const isRTL = computed(() => locale.value === 'ar')

  // Switch language function
  function switchLanguage(newLocale: Locale) {
    // Update locale
    locale.value = newLocale

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, newLocale)
    } catch (e) {
      console.warn('Failed to save language preference to localStorage:', e)
    }

    // Update document attributes
    document.documentElement.setAttribute('lang', newLocale)
    document.documentElement.setAttribute('dir', newLocale === 'ar' ? 'rtl' : 'ltr')
  }

  // Initialize document attributes on mount
  const initLanguage = () => {
    const currentLang = locale.value as string
    document.documentElement.setAttribute('lang', currentLang)
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr')
  }

  return {
    currentLocale,
    isRTL,
    switchLanguage,
    initLanguage
  }
}
