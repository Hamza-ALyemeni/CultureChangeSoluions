<template>
  <footer class="footer">
    <v-container>
      <div class="footer-wrapper">
        <ul class="footer-list">
          <li>
            <img src="@/assets/images/logo.svg" alt="logo" width="200" height="100" class="footer-logo">
          </li>
          <li>
            <b class="green">
              CCS Consulting
            </b> has a solid track record of assisting organizations in planning culture change journeys and effectively
            connecting the change journey to the organization's strategic objectives.
          </li>
        </ul>
        <ul class="footer-list">
          <li>
            <b>
              Contact Us
            </b>
          </li>
          <li>
            <b>
              Email:
            </b>
            <a href="mailto:info@ccsconsulting.com.sa">
              info@ccsconsulting.com.sa
            </a>
          </li>
          <li>
            <b>
              Phone:
            </b>
            <a href="tel:00966554603030">
              +966554603030
            </a>
          </li>
          <li>
            <b>
              Office Address:
            </b>
            Riyadh - King Abdulaziz Road - Aban Center - Second Floor - Office 213
          </li>
          <li>
            <b>Follow us:</b>
          </li>
          <li>
            <ul class="footer-social">
              <li>
                <a href="https://twitter.com/ccsconsultingSA" target="_blank">
                  <v-icon>
                    mdi-twitter
                  </v-icon>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ccsconsulting" target="_blank">
                  <v-icon>
                    mdi-linkedin
                  </v-icon>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="footer-list">
          <li class="footer-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3622.5994037611094!2d46.663145914898394!3d24.77492065478227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ2JzI5LjciTiA0NsKwMzknNTUuMiJF!5e0!3m2!1sen!2sjo!4v1679089860905!5m2!1sen!2sjo"
                width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
          </li>
        </ul>
      </div>
      <WhatsappIcon/>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: auto -16px;
  background: rgba(102, 102, 102, 0.2);
  border-radius: 0 158px 0 0;
  margin-top: 50px;

  &-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 40px;
    gap: 40px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 40px 15px 15px 15px;
    }
  }

  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    li {
      margin-bottom: 10px;

      a {
        color: #331B3B;
        text-decoration: none;
        transition: all 0.3s ease-in-out;


        &:hover {
          color: #DB0812;
          padding-inline-start: 5px;
        }
      }
    }
  }

  &-social {
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &-logo {
    width: 100%;
    max-height: 100px;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      max-height: 50px;
    }
  }


  &-map {
    width: 100%;
    iframe {
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      max-width: 300px;
      margin: auto;
      display: block;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      iframe {
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
        max-width: 400px;
        margin: auto;
        display: block;
      }
    }
  }

}
</style>
<script setup lang="ts">
import WhatsappIcon from "@/components/helpers/Whatsapp.vue";
</script>