<template>
  <header class="header">
    <v-container>
      <nav class="header-nav" :class="{ 'rtl-layout': currentLocale === 'ar' }">
        <!-- Mobile: Logo + Burger grouped together -->
        <div class="mobile-header-group">
          <div class="header-logo">
            <img src="@/assets/images/logo.svg" alt="CSS | KSA" width="200" height="100" class="header-logo-img">
          </div>
          <div class="burger-menu" @click="showMobileMenu = !showMobileMenu">
            <div class="burger-menu-line"></div>
            <div class="burger-menu-line"></div>
            <div class="burger-menu-line"></div>
          </div>
        </div>

        <!-- Desktop: Logo shown separately -->
        <div class="header-logo desktop-logo">
          <img src="@/assets/images/logo.svg" alt="CSS | KSA" width="200" height="100" class="header-logo-img">
        </div>

        <ul class="header-nav-list">
          <li>
            <router-link :to="lp('/')">
              {{ $t('common.home') }}
            </router-link>
          </li>
          <li>
            <router-link :to="lp('/services')">
              {{ $t('common.services') }}
            </router-link>
          </li>
          <li v-if="false">
            <router-link :to="lp('/about')">
              {{ $t('common.about') }}
            </router-link>
          </li>
          <li>
            <router-link :to="lp('/about')">
              {{ $t('common.about') }}
            </router-link>
          </li>
          <li>
            <router-link :to="lp('/ohxray')" style="white-space: nowrap;">
              <span style="color:#4d8d3e">OHX-</span><span style="color:#db0e15;">RAY</span>
            </router-link>
          </li>
          <li>
            <router-link :to="lp('/cmdp')">
              {{ $t('common.cmdp') }}
            </router-link>
          </li>
          <li>
            <router-link :to="lp('/contact')">
              {{ $t('common.contact') }}
            </router-link>
          </li>
          <li>
            <router-link :to="lp('/training-program')" class="nav-cta">
              {{ $t('header.nav.training') }}
            </router-link>
          </li>
        </ul>

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
              <router-link :to="lp('/')">
                {{ $t('common.home') }}
              </router-link>
            </li>
            <li>
              <router-link :to="lp('/services')">
                {{ $t('common.services') }}
              </router-link>
            </li>
            <li>
              <router-link :to="lp('/cmdp')">
                {{ $t('common.cmdp') }}
              </router-link>
            </li>
            <li>
              <router-link :to="lp('/ohxray')" style="white-space: nowrap;">
                <span style="color:#4d8d3e">OHX-</span><span style="color:#db0e15;">RAY</span>
              </router-link>
            </li>
            <li>
              <router-link :to="lp('/about')">
                {{ $t('common.about') }}
              </router-link>
            </li>
            <li>
              <router-link :to="lp('/contact')">
                {{ $t('common.contact') }}
              </router-link>
            </li>
            <li>
              <router-link :to="lp('/training-program')" class="nav-cta">
                 {{ $t('header.nav.training') }}
              </router-link>
            </li>
            <li class="language-toggle-item">
              <button @click="switchLanguage(currentLocale === 'en' ? 'ar' : 'en')" class="mobile-language-btn">
                {{ currentLocale === 'en' ? 'العربية' : 'English' }}
              </button>
            </li>
          </ul>
        </transition>

        <div class="header-right">
          <button @click="switchLanguage(currentLocale === 'en' ? 'ar' : 'en')"
                  class="language-toggle-btn"
                  :aria-label="currentLocale === 'en' ? 'Switch to Arabic' : 'Switch to English'">
            {{ currentLocale === 'en' ? 'العربية' : 'English' }}
          </button>
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
      justify-content: space-between;
    }

    &.rtl-layout {
      flex-direction: row-reverse;

      .header-nav-list {
        flex-direction: row-reverse;
        padding: 0 0 0 1.5rem;
      }

      .header-right {
        margin-left: 0;
        margin-right: auto;
        padding-right: 0;
        padding-left: 2rem;

        @media screen and (max-width: 768px) {
          padding-left: 0;
        }
      }

      .mobile-header-group {
        flex-direction: row-reverse;

         @media screen and (max-width: 768px) {
          padding-left: 0;
          
        }
      }
    }

    &-list {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      list-style: none;
      margin: 0;
      padding: 0 1.5rem 0 0;
      gap: 1.25rem;
      flex-wrap: nowrap;

      @media screen and (max-width: 768px) {
        display: none;
      }

      li {
        margin: 0;
        padding: 0;
        font-size: 1.1rem;
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

      .nav-cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, #4d8d3e, #db0812);
        color: #fff;
        padding: 0.7rem 1.1rem;
        border-radius: 12px;
        font-weight: 700;
        white-space: nowrap;
        text-transform: none;
        box-shadow: 0 10px 20px rgba(77, 141, 62, 0.2);
        transition: opacity 0.2s ease, transform 0.1s ease;

        &:hover {
          color: #fff;
          opacity: 0.95;
        }

        &:active {
          transform: translateY(1px);
        }
      }

      @media screen and (max-width: 1200px) {
        gap: 0.9rem;

        li {
          font-size: 1.05rem;
        }

        .nav-cta {
          padding: 0.6rem 0.9rem;
          font-size: 0.95rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1rem 1.5rem;
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

// Mobile header group: keeps logo and burger together
.mobile-header-group {
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0;
    width: 100%;
    justify-content: space-between;
  }
}

// Desktop logo: hidden on mobile
.desktop-logo {
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.burger-menu {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 50px;
    height: 50px;
    padding: 1rem;
    cursor: pointer;
    z-index: 999;
  }

  &-line {
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

    .nav-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(90deg, #4d8d3e, #db0812);
      color: #fff;
      padding: 0.7rem 1.1rem;
      border-radius: 12px;
      font-weight: 700;
    }
  }
}

.nowrap {
  white-space: nowrap;
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

.language-toggle-btn {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid #4d8d3e;
  border-radius: 8px;
  color: #331B3B;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 1rem;

  &:hover {
    background: #4d8d3e;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.mobile-language-btn {
  padding: 0.7rem 1.5rem;
  background: linear-gradient(90deg, #4d8d3e, #db0812);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.95;
  }
}

.language-toggle-item {
  width: 100%;
  list-style: none;
}

</style>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const showMobileMenu = ref(false)
const { currentLocale, switchLanguage } = useLanguage()

// Helper to prefix routes with current locale
const lp = (path: string) => path === '/' ? `/${currentLocale.value}` : `/${currentLocale.value}${path}`
</script>
