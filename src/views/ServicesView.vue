<template>
  <MainHeader/>
  <v-container>
    <div class="services-banner">
      <div class="services-banner__title">{{ $t('pages.services.banner.title') }}</div>
      <div class="services-banner__description">{{ $t('pages.services.banner.description') }}
      </div>
      <div class="services-banner__button">
        <router-link to="/contact" class="button button--red">{{ $t('pages.services.banner.button') }}</router-link>
      </div>
    </div>
    <div class="services">
      <div class="services__title green">{{ $t('pages.services.title') }}</div>
      <div class="services__list">
        <div v-for="(service, index) in services" :key="index" class="services__card">
          <div class="services__card-front">
            <div class="services__card-image">
              <img :src="service.image" alt="Service Image"/>
            </div>
            <div class="services__card-title red">{{ service.title }}</div>
            <div class="services__card-description">
              {{ service.description.length > 100 ? service.description.slice(0, 100) + ' ...' : service.description }}
            </div>
          </div>
          <div class="services__card-back">
            <div class="services__card-description text-white">{{ service.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
  <MainFooter/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";

export default defineComponent({
  name: "ServicesView",
  components: {MainFooter, MainHeader},
  computed: {
    services() {
      return [
        {
          title: this.$t('pages.services.items.healthyCulture.title'),
          image: "/assets/images/services/Build healthy organizational culture.png",
          description: this.$t('pages.services.items.healthyCulture.description')
        },
        {
          title: this.$t('pages.services.items.assessments.title'),
          image: "/assets/images/services/Health & culture Check.png",
          description: this.$t('pages.services.items.assessments.description')
        },
        {
          title: this.$t('pages.services.items.leadership.title'),
          image: "/assets/images/services/Organizational Leaders effectiveness .png",
          description: this.$t('pages.services.items.leadership.description')
        },
        {
          title: this.$t('pages.services.items.values.title'),
          image: '/assets/images/services/Value Creation & Management.png',
          description: this.$t('pages.services.items.values.description')
        },
        {
          title: this.$t('pages.services.items.changeManagement.title'),
          image: '/assets/images/services/Change management strategy.png',
          description: this.$t('pages.services.items.changeManagement.description')
        },
        {
          title: this.$t('pages.services.items.influencers.title'),
          image: '/assets/images/services/Change Networks and influencers .png',
          description: this.$t('pages.services.items.influencers.description')
        },
        {
          title: this.$t('pages.services.items.diversity.title'),
          image: '/assets/images/services/Internal communication.png',
          description: this.$t('pages.services.items.diversity.description')
        },
        {
          title: this.$t('pages.services.items.communication.title'),
          image: '/assets/images/services/Diversity, and Inclusion.png',
          description: this.$t('pages.services.items.communication.description')
        }
      ]
    }
  }
})
</script>


<style lang="scss" scoped>
.services {
  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__card {
    width: 300px;
    height: 400px;
    margin: 20px;
    perspective: 1000px;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &-front,
    &-back {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      overflow: hidden;
      text-align: center;
    }

    &-front {
      transform: rotateY(0deg);
      transition: transform 0.8s;
    }

    &-back {
      transform: rotateY(180deg);
      transition: transform 0.8s;
      background: linear-gradient(45deg, rgba(#43a047, .9), rgba(#43a047, .91) 50%, rgba(#43a047, .92) 50%, rgba(#43a047, .95) 100%);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      font-weight: 500;
      text-align: center;
    }

    &:hover {
      transform: rotateY(180deg);
    }
  }

  &__card-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }
  }

  &__card-title {
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
  }

  &__card-description {
    font-size: 16px;
    margin: 10px;
  }

  &__card-price {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__card-button {
    padding: 10px 20px;
    background-color: #fff;
    color: #2d2d2d;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #2d2d2d;
      color: #fff;
    }
  }
}


.services-banner {
  background: linear-gradient(0deg, rgba(#43a047, 0.5) 0%, rgba(#f44336, 0.5) 100%),
  url('/assets/images/services/wallpaper.webp') no-repeat center center;
  background-size: cover;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  border-radius: 10px;


  &__title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  &__description {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    max-width: 700px;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      font-size: 16px;
      font-weight: normal;
    }
  }

}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition-duration: 0.4s;

  &:hover {
    background-color: #43a047; /* Green */
    color: white;
  }

  &--red {
    background-color: #f44336;

    &:hover {
      background-color: #d32f2f;
    }
  }
}
</style>