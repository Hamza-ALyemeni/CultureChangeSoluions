<template>
  <div class="training-program">
    <MainHeader />
    <v-container class="page-body">
      <section class="hero">
        <p class="hero__eyebrow">{{ $t('pages.training.hero.eyebrow') }}</p>
        <h1 class="hero__title">{{ $t('pages.training.hero.title') }}</h1>
        <p class="hero__subtitle">
          {{ $t('pages.training.hero.subtitle') }}
        </p>
      </section>

      <section class="overview">
        <div class="overview__content">
          <h2 class="section-title">{{ $t('pages.training.overview.title') }}</h2>
          <p>{{ $t('pages.training.overview.paragraph1') }}</p>
          <p>{{ $t('pages.training.overview.paragraph2') }}</p>
          <p>{{ $t('pages.training.overview.paragraph3') }}</p>
          <p>{{ $t('pages.training.overview.paragraph4') }}</p>
        </div>
        <div class="overview__brochure">
          <div class="brochure-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
          </div>
          <h3>{{ $t('pages.training.brochure.title') }}</h3>
          <p class="brochure-description">{{ $t('pages.training.brochure.description') }}</p>
          <a href="/pdf/training-brochure.pdf" download="CCS-Training-Program-Brochure.pdf" class="download-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {{ $t('pages.training.brochure.button') }}
          </a>
        </div>
      </section>

      <section class="grid-section">
        <h2 class="section-title">{{ $t('pages.training.benefits.title') }}</h2>
        <div class="highlights">
          <article>
            <h3>{{ $t('pages.training.benefits.items.trainers') }}</h3>
          </article>
          <article>
            <h3>{{ $t('pages.training.benefits.items.interactive') }}</h3>
          </article>
          <article>
            <h3>{{ $t('pages.training.benefits.items.practical') }}</h3>
          </article>
          <article>
            <h3>{{ $t('pages.training.benefits.items.diagnostic') }}</h3>
          </article>
          <article>
            <h3>{{ $t('pages.training.benefits.items.cases') }}</h3>
          </article>
          <article>
            <h3>{{ $t('pages.training.benefits.items.templates') }}</h3>
          </article>
        </div>
      </section>

      <section class="methodology">
        <h2 class="section-title">{{ $t('pages.training.methodology.title') }}</h2>
        <div class="steps">
          <div class="step">
            <span>01</span>
            <h3>{{ $t('pages.training.methodology.diagnosis.title') }}</h3>
            <p>{{ $t('pages.training.methodology.diagnosis.description') }}</p>
          </div>
          <div class="step">
            <span>02</span>
            <h3>{{ $t('pages.training.methodology.design.title') }}</h3>
            <p>{{ $t('pages.training.methodology.design.description') }}</p>
          </div>
          <div class="step">
            <span>03</span>
            <h3>{{ $t('pages.training.methodology.sustainability.title') }}</h3>
            <p>{{ $t('pages.training.methodology.sustainability.description') }}</p>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div>
          <h2>{{ $t('pages.training.cta.title') }}</h2>
          <p>{{ $t('pages.training.cta.subtitle') }}</p>
        </div>
       <a href="https://training.ccsconsulting.com.sa/" class="cta-button">
          {{ $t('pages.training.cta.button') }}
        </a>
      </section>
    </v-container>
    <MainFooter />
  </div>
</template>

<script lang="ts" setup>
import MainFooter from '@/components/layout/MainFooter.vue'
import MainHeader from '@/components/layout/MainHeader.vue'
</script>

<style scoped lang="scss">
.training-program {
  background: linear-gradient(180deg, rgba(77, 141, 62, 0.08), rgba(219, 8, 18, 0.08));
  min-height: 100vh;
  color: #333;
}

.page-body {
  padding: 2.5rem 0 4rem;
}

.hero {
  text-align: center !important;
  margin-bottom: 2.5rem;
}

.hero__eyebrow {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4d8d3e;
  font-weight: 700;
}

.hero__title {
  font-size: 2.6rem;
  margin: 0.6rem 0 0.5rem;
  color: #331B3B;
  position: relative;
}

.hero__title::after {
  content: "";
  display: block;
  width: 120px;
  height: 4px;
  margin: 0.8rem auto 0;
  background: linear-gradient(90deg, #4d8d3e, #db0812);
}

.hero__subtitle {
  max-width: 720px;
  margin: 0.7rem auto 1.5rem;
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.hero__note {
  color: #666;
  font-size: 0.95rem;
}


.overview {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 2rem;
  margin-bottom: 2.5rem;
}


.overview__content {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #4d8d3e;
}

.overview__content p {
  margin: 0 0 1rem;
  line-height: 1.8;
  color: #333;
}

.overview__content p:last-child {
  margin-bottom: 0;
}

.overview__card {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #db0812;
}

.overview__brochure {
  background: #fff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #db0812;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.overview__brochure h3 {
  margin: 0;
  color: #331B3B;
  font-size: 1.5rem;
  font-weight: 700;
}

.brochure-icon {
  color: #db0812;
  margin-bottom: 0.5rem;
}

.brochure-description {
  margin: 0;
  color: #666;
  line-height: 1.6;
  max-width: 320px;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4d8d3e, #3a6e2f);
  color: #fff;
  text-decoration: none;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 700;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(77, 141, 62, 0.3);
}

.download-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(77, 141, 62, 0.4);
  background: linear-gradient(135deg, #5aa049, #4d8d3e);
}

.download-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(77, 141, 62, 0.3);
}

.download-button svg {
  width: 20px;
  height: 20px;
}

.overview__card h3 {
  margin: 0 0 1rem;
  color: #331B3B;
}

.overview__card ul {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.7;
}

.overview__card li {
  margin-bottom: 0.6rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #331B3B;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center !important;
}


.highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.highlights article{
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    border-left: 4px solid #db0812;
}

.highlights h3 {
  margin: 0 0 0.6rem;
  font-size: 1.2rem;
  color: #331B3B;
}

.highlights p {
  margin: 0;
  color: #333;
  line-height: 1.6;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}


.benefits article {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #4d8d3e;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.benefits h3 {
  margin: 0 0 0.6rem;
  font-size: 1.2rem;
  color: #331B3B;
}

.benefits p {
  margin: 0;
  color: #333;
  line-height: 1.6;
}

.methodology {
  margin-bottom: 2.5rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.step {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #db0812;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.step span {
  display: inline-block;
  font-weight: 700;
  color: #db0812;
  margin-bottom: 0.6rem;
}

.step h3 {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  color: #331B3B;
}

.step p {
  margin: 0;
  color: #333;
  line-height: 1.6;
}

.cta-section {
  margin-top: 3rem;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #4d8d3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.cta-section h2 {
  margin: 0 0 0.5rem;
  color: #331B3B;
}

.cta-section p {
  margin: 0;
  color: #333;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  background: linear-gradient(90deg, #4d8d3e, #db0812);
  border: none;
  color: #fff;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.1s ease;
}

.cta-button:hover {
  opacity: 0.95;
}

.cta-button:active {
  transform: translateY(1px);
}

@media screen and (max-width: 1024px) {
  .overview {
    grid-template-columns: 1fr;
  }

  .benefits {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cta-section {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 640px) {
  .page-body {
    padding: 2rem 1rem 3rem;
  }

  .hero__title {
    font-size: 2.1rem;
  }

  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
