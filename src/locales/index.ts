import en from './en.json'
import ar from './ar.json'

export const messages = {
  en,
  ar
}

export type Locale = 'en' | 'ar'

export const defaultLocale: Locale = 'en'

export const supportedLocales: Locale[] = ['en', 'ar']
