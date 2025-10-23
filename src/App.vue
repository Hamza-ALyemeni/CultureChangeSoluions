<template>
  <v-app>
    <v-main style="overflow: hidden !important;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',

  data() {
    return {
      //
    }
  },
})
</script>


<style lang="scss">
.green {
  color: #4D8D3E;
}

.red {
  color: #DB0812;
}
</style>