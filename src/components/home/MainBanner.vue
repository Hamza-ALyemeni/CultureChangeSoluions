<template>
  <section class="banner">
    <v-container>
      <div class="banner-wrapper">
        <div class="banner-start">
          <h1 class="banner-title fade-in-scale-up">
                    <span class="banner-title-bold">
                        We Help you to
                                  <span class="banner-block"></span>
                    </span>
            scale up your organization culture
          </h1>
          <p class="banner-description">
            We believe in <b class="green">'being' culture not 'doing culture</b>, and we provide tangible solutions
            designed to overcome any
            cultural challenge by leveraging our deep understanding and awareness of Saudi Cultural context.
          </p>
        </div>
        <div class="banner-end">
          <div class="banner-image-container">
            <img class="banner-image" src="@/assets/images/banner-image.png" alt="banner-image"/>
          </div>
        </div>
      </div>

    </v-container>
  </section>
</template>


<style scoped lang="scss">
.banner {
  padding: 1rem 2rem;
  margin-block-end: 60px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    gap: 30px;


    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }

  }

  &-title {
    font-size: 48px;
    font-weight: 300;
    color: #331B3B;
    max-width: 650px;
    position: relative;


    @media screen and (max-width: 768px) {
      font-size: 34px;
    }


    &-bold {
      position: relative;
      font-weight: 700;
      font-size: 54px;
      @media screen and (max-width: 768px) {
        font-size: 38px;
      }
    }
  }

  &-description {
    font-size: 20px;
    color: #331B3B;
    max-width: 650px;
    margin-top: 1rem;
    text-align: justify;

    b {
      font-weight: 700;
    }
  }

  &-image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-start, &-end {
    flex: 1;
  }


  &-block {
    position: absolute;
    display: block;
    height: 20px;
    background-color: #DB0812;
    margin-top: 1rem;
    left: 3px;
    bottom: -3px;
    width: 291px;
    z-index: -1;
  }
}


.fade-in-scale-up {
  opacity: 0;
  transform: scale(0.5);
  animation: fade-in-scale-up 1.5s forwards;
}

@keyframes fade-in-scale-up {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

</style>