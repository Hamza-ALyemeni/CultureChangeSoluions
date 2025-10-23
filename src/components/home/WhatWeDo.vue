<template>
    <div class="do">
        <v-container>
            <h2 class="do-title">
                <b class="position-relative">
                    What We Do
                    <span class="do-block">

        </span>
                </b>
                <br>
                For Your
                organization
            </h2>
            <div class="do-slider">
                <Splide
                        :has-track="false"
                        :options="options" aria-label="products">
                    <div class="slier-container">
                        <div class="splide__arrows pb-3" dir="ltr">
                            <button class="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide"
                                    aria-controls="splide01-track">
                                <img src="@/assets/images/left.svg" alt="prev" height="20">
                            </button>
                            <button class="splide__arrow splide__arrow--next" type="button"
                                    aria-label="Go to first slide"
                                    aria-controls="splide01-track">
                                <img src="@/assets/images/right.svg" alt="next" height="20">
                            </button>
                        </div>
                        <SplideTrack>
                            <SplideSlide v-for="item in items" :key="item.id" class="py-3">
                                <div class="d-flex justify-content-center align-items-center">
                                    <div class="do-card">
                                        <h3 class="do-card-title">
                                            {{ item.title }}
                                        </h3>
                                        <p class="do-card-description">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </SplideTrack>
                    </div>
                </Splide>
            </div>
        </v-container>
        <div class="do-background">

        </div>
    </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {Splide, SplideSlide, SplideTrack} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';
import '@splidejs/vue-splide/css';

export default defineComponent({
    name: "WhatWeDo",
    data() {
        return {
            items: [
                {
                    title: "Experience and expertise",
                    description: "We provide experience and expertise to assist you in identifying and implementing change. We don't just make suggestions or tell you what needs to be done."
                },
                {
                    title: "Tangible cultural change",
                    description: "We provide a tangible cultural change service, collaborating with you at all levels of your organization to identify the challenges you face and the root causes of those challenges."
                },
                {
                    title: "Reasonable pricing scheme",
                    description: "We have reasonable pricing scheme and will leave you self-sufficient. We want every company we work with to thrive and to be able to foster a culture that brings out the best in its employees."
                },
                {
                    title: "Many solutions",
                    description: "CCS provides many solutions to your organization‘s culture which allow you better understand the underlying mind-sets and behaviors that drive performance."
                },
                {
                    title: "Simple but powerful road map",
                    description: "CCS providing a simple but powerful road map for leaders and managers to improve organizational health."
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
    }

})
</script>

<style lang="scss" scoped>
.do {
  position: relative;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }

  &-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }

  &-background {
    position: absolute;
    width: 90%;
    height: 100%;
    top: 0;
    left: -15px;
    background: rgba(102, 102, 102, 0.2);
    border-radius: 0 120px 0 0;
    z-index: -1;
    @media screen and (max-width: 768px) {
      width: 100%;
      border-radius: 0 100px 0 0;
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

    @media screen and (max-width: 1100px) {
      height: 340px;
    }

    &-title {
      color: #DB0812;
    }
  }

  &-block {
    position: absolute;
    bottom: 0;
    left: -18px;
    width: 100%;
    display: block;
    background-color: #DB0812;
    height: 15px;
    z-index: -1;
    margin-inline-start: 20px;
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 50px;
}
</style>