<template>
  <v-app :dir="isRTL ? 'rtl' : 'ltr'" :lang="currentLocale">
    <v-main style="overflow: hidden !important;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const { currentLocale, isRTL, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})
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