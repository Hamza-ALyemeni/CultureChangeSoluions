<template>
    <div style="position: relative">
        <MainHeader/>
        <v-container>
            <div class="about-page">
                <div class="about-page-wrapper">
                    <div class="about-page-start">
                        <p class="about-page-title">
                            CCS VISION
                        </p>
                        <p class="about-page-content">
                            To be the first Saudi firm of
                            choice for public and
                            private sectors who want
                            to put their people at the
                            core of their strategy.
                        </p>
                    </div>
                    <div class="about-page-end">
                        <p class="about-page-title red">
                            CCS MISSION
                        </p>
                        <p class="about-page-content">
                            We believe people are the key to an
                            organization's competitive advantage. Our
                            mission is to help organizations leverage the
                            full potential of their people and adopt a
                            positive ever-changing working.
                        </p>
                    </div>
                </div>
                <div class="position-relative overflow-hidden about-page-image-container">
                    <img src="@/assets/images/about/image.jpg" alt="vision" class="about-page-image">

                </div>
            </div>

        </v-container>
        <div class="value">
            <v-container>
                <div class="d-flex justify-center align-center mb-3">
                    <h2 class="value-title">
                        CCS CORE VALUES
                    </h2>
                </div>
                <div class="value-slider">
                    <div class="value-container">
                        <template v-for="(item,index) in items" :key="item.title">
                            <div class="py-3">
                                <div class="d-flex justify-content-center align-items-center">
                                    <div class="value-card">
                                        <h3 class="value-card-title">
                                            {{ item.title.toLowerCase() }}
                                        </h3>
                                        <p class="value-card-description">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img src="@/assets/images/about/double-arrow.svg"
                                 alt="arrows"
                                 width="50"
                                 v-if="index < items.length - 1"
                            >
                        </template>
                    </div>
                </div>
                <div class="value-background">
                </div>
            </v-container>
        </div>

        <MainFooter/>
    </div>
</template>
<script setup lang="ts">
import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
import {ref} from "vue";

const items = ref(
    [
        {
            title: "COMMITMENT",
            description: "We honor our commitments to\n" +
                "clients, each other, and the\n" +
                "organizations. We take\n" +
                "ownership of our work and\n" +
                "hold ourselves accountable for\n" +
                "results."
        },
        {
            title: "COLLABORATION",
            description: "We recognize that people drive\n" +
                "success. We work together,\n" +
                "both as a company and with\n" +
                "our clients, to share\n" +
                "knowledge, foster innovation,\n" +
                "solve problems, and deliver\n" +
                "quality results."
        },
        {
            title: "SUSTAINABILITY",
            description: "We believe in transferring\n" +
                "knowledge and building\n" +
                "capabilities with our clients,\n" +
                "partners, employees, and\n" +
                "community. The growth and\n" +
                "success of our business are\n" +
                "rooted in the long-term\n" +
                "relationships and deep\n" +
                "customer loyalty we have\n" +
                "forged over the years."
        },
    ]
);

</script>


<style lang="scss" scoped>
.about-page {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 33px;
  gap: 33px;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    padding: 11px;
    width: 100%;
    overflow: hidden;
  }

  &-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px 120px 10px 120px;
    position: relative;
    min-height: 700px;

    &-container {
      flex: 1;
      position: relative;
      overflow: hidden;
      height: 100%;
      border-radius: 10px 120px 10px 120px;

      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 10px 120px 10px 120px;
        background: linear-gradient(45deg, rgba(#43a047, .1), rgba(#43a047, .11) 50%, rgba(#43a047, .12) 50%, rgba(#43a047, .15) 100%);
      }
    }

  }

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 11px;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &-wrapper {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 33px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &-start, &-end {
    flex: 1;
    height: 100%;
    background-color: rgba(102, 102, 102, 0.2);;
    padding: 33px;
    border-radius: 10px;
    padding-block: 100px;
    min-height: 435px;
    @media screen and (max-width: 1024px) {
      padding-block: 50px;
      min-height: 330px;
    }
    @media screen and (max-width: 768px) {
      padding-block: 0;
      padding: 11px;
      min-height: 0;

    }

  }

  &-title {
    color: #331B3B;
    font-size: 24px;
    font-weight: 600;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: 3px;
      left: 15px;
      width: 90%;
      height: 4px;
      background-color: #4D8D3E;
    }

    &.red {
      &::after {
        background-color: #DB0812;
      }
    }
  }

  &-content {
    color: #331B3B;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 9px;
  }
}


.value {
  position: relative;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }

  &-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    display: inline-block;
    margin: 0 auto 30px;;
    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 3%;
      width: 90%;
      height: 4px;
      background-color: #4D8D3E;
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
    @media screen and (max-width: 768px) {
      width: 100%;
      border-radius: 0 100px 0 0;
    }
  }

  &-card {
    width: 310px;
    height: 225px;
    padding: 20px;
    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color: #fff;
    margin: auto;
    z-index: 1;

    &-title {
      color: #DB0812;
      text-transform: capitalize;

      //change the color of the first letter
      &:first-letter {
        color: #4D8D3E;
      }
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

  &-container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;

      img {
        transform: rotate(90deg);
      }
    }
  }
}

</style>