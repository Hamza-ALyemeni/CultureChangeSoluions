<template>
  <section class="about">
    <v-container>
      <div class="about-wrapper">
        <div class="about-start">
          <div class="about-image-container">
            <img class="about-image" src="@/assets/images/about.png" alt="about-image"/>
          </div>
        </div>
        <div class="about-end">
          <h2 class="about-title " ref="aboutSection" :class="{ 'is-animating': isAnimating }">
            <span class="position-relative">
              About Us
             <span class="about-block">
            </span>
            </span>
          </h2>
          <p class="about-description">
          <span>
            <b>
              CCS
            </b>
          </span>CCS is a Saudi Company Specialized in organizations culture and change management,
           provide consultancy services through the best-in-class Saudi and non-Saudi experts for private,
            public and non-profit sectors.
          </p>
        </div>
      </div>
    </v-container>
  </section>
</template>


<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AboutCCS',
  data() {
    return {
      isAnimating: false,
    };
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
    observer.observe(this.$refs.aboutSection);
  }
});
</script>


<style scoped lang="scss">
.about {


  &-wrapper {
    padding: 1rem 2rem;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    gap: 80px;
    height: 100%;

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 0;
    }
  }

  &-title {
    font-weight: 700;
    font-size: 52px;
    color: #331B3B;
    max-width: 500px;
    position: relative;
    @media screen and (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }

    &.is-animating {
      animation: animateTitle 1s ease-in-out;
    }
  }

  &-description {
    font-size: 20px;
    color: #331B3B;
    max-width: 500px;
    margin-top: 1rem;
    text-align: justify;

    span {
      color: #4D8D3E;
    }
  }

  &-block {
    position: absolute;
    display: block;
    height: 15px;
    background-color: #DB0812;
    bottom: 3px;
    left: 0;
    width: 100%;
    z-index: -1;
    @media screen and (max-width: 768px) {
      height: 5px;
      bottom: 8px;
    }
  }

  &-image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 750px;
  }

  &-start {
    flex: 1;
  }

  &-end {
    flex: 1;
  }
}


@keyframes animateTitle {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>