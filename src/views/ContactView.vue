<template>
  <div style="position: relative">
    <MainHeader/>
    <div class="toast" :class="{'toast--show': toastActive}">
      <div class="toast__wrapper">
        <div class="toast__wrapper__content">
          <div class="toast__wrapper__content__text">
            <p class="toast__wrapper__content__text__title">Message Sent Successfully</p>
            <p class="toast__wrapper__content__text__body">
              Thank you, We will get back to you as soon as possible and you can also contact us on our whatsapp number.
            </p>
          </div>
        </div>
        <div class="toast__wrapper__close" @click="toastActive= false">
          <img src="/assets/images/close.svg" alt="close" width="20" height="20">
        </div>
      </div>
    </div>
    <v-container>
      <div class="contact-wrapper">
        <section id="contact-from">
          <div class="contact-form">
            <h1 class="contact-form__title">Contact Us</h1>
            <form @submit.prevent="submitForm" class="contact-form__form">
              <div class="contact-form__field">
                <label for="sender-email" class="contact-form__field__label">Your Email:</label>
                <input type="email" id="sender-email" v-model="senderEmail" required class="contact-form__field__input">
              </div>
              <div class="contact-form__field">
                <label for="subject" class="contact-form__field__label">Subject:</label>
                <input type="text" id="subject" v-model="subject" required class="contact-form__field__input">
              </div>
              <div class="contact-form__field">
                <label for="body" class="contact-form__field__label">Body:</label>
                <textarea id="body" v-model="body" required class="contact-form__field__textarea"></textarea>
              </div>
              <button type="submit" class="contact-form__submit-button">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </v-container>
    <MainFooter/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
import emailjs from '@emailjs/browser';

export default defineComponent({
  name: "ContactForm",
  components: {MainFooter, MainHeader},
  data() {
    return {
      senderEmail: "",
      subject: "",
      body: "",
      toastActive: false,
    };
  },
  methods: {
    async submitForm() {
      this.toastActive = true;
      try {
        const res = await emailjs.send('service_f4mmjce',
            'template_tdtda6k',
            {
              from_name: this.senderEmail,
              to_name: 'CCS',
              title: this.subject,
              message: this.body,
            },
            'YTtNjPStHutOJvcMs'
        )
        console.log(res, 'res');
      } catch (e) {
        console.log(e, 'error');
      } finally {

        setTimeout(() => {
          this.toastActive = false;
        }, 3000);
        //clear form
        this.senderEmail = "";
        this.subject = "";
        this.body = "";
      }
    },
  },
});
</script>

<style lang="scss" scoped>

#contact-from {
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(#DB0812, 0.125), rgba(#DB0812, 0.1)), url("@/assets/images/contact/ksa-tower.webp") no-repeat center center;
  background-size: cover;
}

.contact-wrapper {
  padding: 20px;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  max-width: 500px;
  margin: 0 auto 0 0;
  border-radius: 10px;

  &__title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    & + & {
      margin-top: 20px;
    }

    &__label {
      font-size: 16px;
      margin-bottom: 5px;
    }

    &__input,
    &__textarea {
      resize: none !important;
      padding: 10px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

      &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }
    }

    &__textarea {
      resize: vertical;
      min-height: 150px;
    }
  }

  &__submit-button {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #43a047;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }
}


.toast {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  &__wrapper {
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    &__content {
      display: flex;
      align-items: center;

      &__text {
        &__title {
          font-size: 24px;
          margin-bottom: 10px;
        }

        &__body {
          font-size: 16px;
        }
      }
    }

    &__close {
      cursor: pointer;
    }
  }

  &--show {
    opacity: 1;
    visibility: visible;
  }
}


</style>