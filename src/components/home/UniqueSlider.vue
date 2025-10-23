<template>
  <div class="unique">
    <v-container>
      <div class="unique-header">
        <h2 class="unique-title" ref="fromLeft" :class="{'is-animating': isAnimating}">
          <b>
                      <span class="position-relative">
            WHAT MAKE <span class="green">
            CCS
          </span>
                          <span class="unique-block">
        </span>
          </span>
          </b>

          <br>
          UNIQUE IN SAUDI MARKET

        </h2>
        <p class="unique-subtitle">
          Our primary focus is on the human side of business. We create organizations in which both business and people
          thrive.
        </p>
      </div>
      <div class="unique-slider">
        <Splide
            :has-track="false"
            :options="options" aria-label="products">
          <div class="slier-container">
            <SplideTrack>
              <SplideSlide v-for="item in items" :key="item.id" class="py-3">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="unique-card">
                    <h3 class="unique-card-title">
                      {{ item.title }}
                    </h3>
                    <p class="unique-card-description">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </SplideTrack>
            <div class="splide__arrows pb-3" dir="ltr">
              <button class="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide"
                      aria-controls="splide01-track">
                <img src="@/assets/images/left.svg" alt="prev" height="20">
              </button>
              <button class="splide__arrow splide__arrow--next" type="button" aria-label="Go to first slide"
                      aria-controls="splide01-track">
                <img src="@/assets/images/right.svg" alt="next" height="20">
              </button>
            </div>
          </div>

        </Splide>
      </div>
    </v-container>
    <div class="unique-background">
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {Splide, SplideSlide, SplideTrack} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';
import '@splidejs/vue-splide/css';

export default defineComponent({
  name: "UniqueSlider",
  data() {
    return {
      isAnimating: false,
      items: [
        {
          title: "Saudi cultural context",
          description: "SAUDI trusted brand and Local National Player. Which has a thorough understanding of the Saudi cultural context."
        },
        {
          title: "KSA Vision 2030",
          description: "Contribute of the Ambitious KSA Vision 2030 anticipates to cultivate and thrive new vibrant environment driven by deep rooted values."
        },
        {
          title: "Cultural deep capabilities",
          description: "Has a cultural deep capabilities that can guide organizations through transformation journey."
        },
        {
          title: "Saudi team",
          description: "Supported by a Saudi team with a rich history of multiple successful private and public transformations since 1999 in such a dynamic and challenging domain."
        },
        {
          title: "Professional Support",
          description: "Providing implementation support throughout the transformation journey that is not typically provided by others."
        }
      ]
    }
  },
  components: {
    Splide,
    SplideSlide,
    SplideTrack
  },
  computed: {
    options() {
      return {
        perPage: 3,
        type: 'loop',
        gap: '1rem',
        breakpoints: {
          1200: {
            perPage: 3
          },
          768: {
            perPage: 2
          },
          576: {
            perPage: 1
          }
        }
      };
    }
  },
  mounted() {
    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      // Loop through each entry
      entries.forEach(entry => {
        // If the entry is in the viewport
        if (entry.isIntersecting) {
          // Set the 'isTyping' data property to true to trigger the animation
          this.isAnimating = true;
          // Stop observing the entry to prevent the animation from running again
          observer.unobserve(entry.target);
        }
      });
    });

    // Observe the .typewriter-section element
    observer.observe(this.$refs.fromLeft);
  }


})
</script>

<style lang="scss" scoped>
.unique {
  position: relative;
  padding: 60px 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }


  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

  }

  &-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: start;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    &.is-animating {
      animation: slideInLeft 1s ease-in-out;
    }

  }

  &-background {
    position: absolute;
    width: 90%;
    height: 100%;
    top: 0;
    right: -15px;
    background: rgba(102, 102, 102, 0.2);
    border-radius: 120px 0 0 0;
    z-index: -1;

    @media screen and (max-width: 768px) {
      border-radius: 100px 0 0 0;
      width: 100%;
    }
  }

  &-card {
    width: 310px;
    height: 195px;
    padding: 20px;
    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color: #fff;
    margin: auto;

    &-title {
      color: #DB0812;
    }
  }

  &-block {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    display: block;
    background-color: #DB0812;
    height: 20px;
    z-index: -1;
    margin-inline-start: 20px;
  }

  &-subtitle {
    font-size: 1rem;
    font-weight: 700;
    text-align: start;
    margin-bottom: 50px;
    max-width: 600px;
  }
}


:deep {
  .splide__pagination {
    display: none;
  }

  .new-card {
    width: 95%;
  }
}

.splide__arrows {
  position: relative;
  display: flex;
  justify-content: end;
  gap: .3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.splide__arrow {
  all: unset;
  cursor: pointer;
  border: 1px solid #000;
  padding: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.slier-container {
  width: 100%;
}


@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>