<template>
  <header class="header">
    <v-container>
      <nav class="header-nav">
        <ul class="header-nav-list">
          <li>
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/services">
              Services
            </router-link>
          </li>
          <li v-if="false">
            <router-link to="/about">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/ohxray" style="white-space: nowrap;">
              <span style="color:#4d8d3e">OHX-</span><span style="color:#db0e15;">RAY</span>
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              Contact
            </router-link>
          </li>

        </ul>
        <!--   burger menu      -->
        <div class="burger-menu" @click="showMobileMenu = !showMobileMenu">
          <div class="burger-menu-line"></div>
          <div class="burger-menu-line"></div>
          <div class="burger-menu-line"></div>
        </div>
        <!--   burger menu      -->
        <transition name="fade">
          <ul class="header-nav-list-mobile" v-show="showMobileMenu">
            <li>
              <div class="header-nav-list-mobile-header">
                <img src="@/assets/images/logo.svg" alt="CSS | KSA" width="200" height="100" class="header-logo-img">
                <div class="burger-menu-close" @click="showMobileMenu = !showMobileMenu">
                  <img src="/assets/images/close.svg" alt="close" width="20" height="20">
                </div>
              </div>
            </li>
            <li>
              <router-link to="/">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/services">
                Services
              </router-link>
            </li>
            <li>
              <router-link to="/ohxray" style="white-space: nowrap;">
                <span style="color:#4d8d3e">OHX-</span><span style="color:#db0e15;">RAY</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                About
              </router-link>
            </li>
            <li>
              <router-link to="/contact">
                Contact
              </router-link>
            </li>
          </ul>
        </transition>
        <div class="header-logo">
          <img src="@/assets/images/logo.svg" alt="CSS | KSA" width="200" height="100" class="header-logo-img">
        </div>
      </nav>
    </v-container>
    <div class="header-block"></div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  &-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 1rem 2rem;
    @media screen and (max-width: 768px) {
      padding: 0;
    }

    &-list {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      list-style: none;
      margin: 0;
      padding: 0;

      @media screen and (max-width: 768px) {
        display: none;
      }

      li {
        margin: 0 1rem;
        padding: 0;
        font-size: 1.2rem;
        font-weight: 500;
        color: #331B3B;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: #DB0812;
        }

        a {
          color: #331B3B;
          text-decoration: none;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: #DB0812;
          }
        }
      }
    }
  }

  &-social {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;

    li {
      margin: 0 1rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: #331B3B;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease-in-out;
      border: 2px solid rgba(51, 27, 59, 0.64);
      border-radius: 47%;
      padding: 5px;
      position: relative;
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }

      &:hover {
        color: #DB0812;
        border: 2px solid rgba(219, 8, 18, 0.64);
      }

      a {

        color: #331B3B;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        transform: rotate(-30.5deg);

        &:hover {
          color: #DB0812;
        }
      }
    }
  }

  &-logo {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 1rem 2rem;
    @media screen and (max-width: 768px) {
      padding: 0;
    }

    &-img {
      width: 100%;
      height: 100%;
      max-width: 200px;

      @media screen and (max-width: 768px) {
        width: 120px;
        height: 60px;
        padding: 0;
      }
    }

  }

  &-block {
    position: absolute;
    width: 867.54px;
    height: 819.82px;
    right: -360px;
    top: -168px;
    background: rgba(77, 141, 62, 0.2);
    border-radius: 50%;
    z-index: -1;
  }
}

.burger-menu{
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 50px;
    height: 50px;
    padding: 1rem;
    cursor: pointer;
    z-index: 999;
  }

  &-line{
    width: 100%;
    height: 2px;
    background: #331B3B;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }
}


.header-nav-list-mobile{
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 999;
    list-style: none;
    margin: 0;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 2rem;
    }
    li{
      margin: 1rem 0;
      font-size: 1.2rem;
      font-weight: 500;
      color: #331B3B;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease-in-out;
      a{
        color: #331B3B;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover{
          color: #DB0812;
        }
      }
    }
  }
}


//fade in animation
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.fade-enter-to, .fade-leave /* .fade-enter-active below version 2.1.8 */ {
  opacity: 1
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



</style>

<script lang="ts" setup>
import { ref } from 'vue'
const showMobileMenu = ref(false)
</script>