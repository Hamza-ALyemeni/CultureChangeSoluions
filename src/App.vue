<template>
  <v-app :dir="isRTL ? 'rtl' : 'ltr'" :lang="currentLocale">
    <v-main style="overflow: hidden !important;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const route = useRoute()
const { currentLocale, isRTL, initLanguage, syncLocaleFromRoute } = useLanguage()

onMounted(() => {
  initLanguage()
  updateHreflang()
})

// Sync locale whenever route changes
watch(() => route.params.locale, () => {
  syncLocaleFromRoute()
  updateHreflang()
})

function updateHreflang() {
  // Remove existing hreflang links
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove())

  const path = route.path.replace(/^\/(en|ar)/, '') || ''
  const base = window.location.origin

  const enLink = document.createElement('link')
  enLink.rel = 'alternate'
  enLink.hreflang = 'en'
  enLink.href = `${base}/en${path}`
  document.head.appendChild(enLink)

  const arLink = document.createElement('link')
  arLink.rel = 'alternate'
  arLink.hreflang = 'ar'
  arLink.href = `${base}/ar${path}`
  document.head.appendChild(arLink)

  const defaultLink = document.createElement('link')
  defaultLink.rel = 'alternate'
  defaultLink.hreflang = 'x-default'
  defaultLink.href = `${base}/en${path}`
  document.head.appendChild(defaultLink)
}
</script>


<style lang="scss">
@import './styles/rtl.scss';

.green {
  color: #4D8D3E;
}

.red {
  color: #DB0812;
}
</style>
