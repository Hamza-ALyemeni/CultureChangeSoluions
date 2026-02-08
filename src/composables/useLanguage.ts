import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import type { Locale } from '@/locales'

const STORAGE_KEY = 'preferred-language'

export function useLanguage() {
  const { locale } = useI18n()
  const router = useRouter()
  const route = useRoute()

  // Current locale as computed property
  const currentLocale = computed(() => locale.value as Locale)

  // Check if current language is RTL (Arabic)
  const isRTL = computed(() => locale.value === 'ar')

  // Switch language function - navigates to the new locale URL
  function switchLanguage(newLocale: Locale) {
    // Update i18n locale
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

    // Navigate to the same page but with new locale prefix
    const currentPath = route.path
    const oldLocale = route.params.locale as string
    const pathWithoutLocale = currentPath.replace(`/${oldLocale}`, '') || ''
    router.replace(`/${newLocale}${pathWithoutLocale}`)
  }

  // Sync locale from route param
  function syncLocaleFromRoute() {
    const routeLocale = route.params.locale as Locale
    if (routeLocale && (routeLocale === 'en' || routeLocale === 'ar')) {
      locale.value = routeLocale
      try {
        localStorage.setItem(STORAGE_KEY, routeLocale)
      } catch (e) { /* ignore */ }
      document.documentElement.setAttribute('lang', routeLocale)
      document.documentElement.setAttribute('dir', routeLocale === 'ar' ? 'rtl' : 'ltr')
    }
  }

  // Initialize document attributes on mount
  const initLanguage = () => {
    syncLocaleFromRoute()
  }

  return {
    currentLocale,
    isRTL,
    switchLanguage,
    initLanguage,
    syncLocaleFromRoute
  }
}
