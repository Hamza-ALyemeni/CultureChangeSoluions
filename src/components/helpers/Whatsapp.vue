<template>
  <v-expand-transition>
    <div class="whatsapp-icon" v-show="showIcon" @click="startConversation" ref="whatsappIcon">
      <v-icon size="40" class="mb-2">mdi-whatsapp</v-icon>
    </div>
  </v-expand-transition>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'WhatsappIcon',
  data() {
    const showIcon = false;
    const message = "Start a conversation now!";
    return {
      message,
      showIcon
    };
  },
  methods: {
    startConversation() {
      // without 00 in front of the number it will not work on mobile devices
      window.open("https://api.whatsapp.com/send?phone=966554603030", "_blank");
    }
  },
  created() {
    setTimeout(() => {
      this.showIcon = true;
    }, 7000);
  }
});
</script>

<style lang="scss">
.whatsapp-icon {
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: #25D366;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  height: 65px;
  justify-content: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  transform: translateY(100%); // move icon offscreen
  transition: transform 0.3s ease-out; // animate transform property
}

</style>