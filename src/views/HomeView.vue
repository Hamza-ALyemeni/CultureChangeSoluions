<template>
  <v-app>
      <v-row>
        <v-col cols="12" class="pb-0">
          <MainHeaderVue/>
          <MainBanner/>
          <WhatWeDo/>
          <About/>
          <UniqueSlider/>
          <MainFooter/>
        </v-col>
      </v-row>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import MainHeaderVue from '@/components/layout/MainHeader.vue';
import MainBanner from '@/components/home/MainBanner.vue';
import WhatWeDo from '@/components/home/WhatWeDo.vue';
import About from "@/components/home/About.vue";
import Clients from "@/components/home/Clients.vue";
import UniqueSlider from "@/components/home/UniqueSlider.vue";
import MainFooter from "@/components/layout/MainFooter.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    MainFooter,
    UniqueSlider,
    About,
    HelloWorld,
    MainHeaderVue,
    MainBanner,
    WhatWeDo,
  },
});
</script>
