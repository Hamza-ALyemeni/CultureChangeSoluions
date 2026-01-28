// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  rtl: false, // Will be toggled dynamically based on locale
  locale: {
    locale: 'en',
    fallback: 'en'
  }
})
