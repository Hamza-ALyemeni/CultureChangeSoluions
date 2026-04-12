<template>
  <div class="training-program">
    <MainHeader />

    <!-- Hero -->
    <section class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">{{ $t('pages.training.hero.title') }}</h1>
        <p class="hero__subtitle">{{ $t('pages.training.hero.subtitle') }}</p>
        <div class="hero__actions">
          <a href="https://training.ccsconsulting.com.sa/courses/foundations-of-organizational-culture/register" class="btn btn--primary">
            {{ $t('pages.training.cta.button') }}
          </a>
          <a href="/pdf/training-brochure.pdf" download="CCS-Training-Program-Brochure.pdf" class="btn btn--outline-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {{ $t('pages.training.brochure.button') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <v-container>
      <section class="overview">
        <h2 class="section-heading">{{ $t('pages.training.overview.title') }}</h2>
        <div class="overview__grid">
          <p>{{ $t('pages.training.overview.paragraph1') }}</p>
          <p>{{ $t('pages.training.overview.paragraph2') }}</p>
          <p>{{ $t('pages.training.overview.paragraph3') }}</p>
          <p>{{ $t('pages.training.overview.paragraph4') }}</p>
        </div>
      </section>

      <!-- Benefits -->
      <section class="benefits">
        <h2 class="section-heading">{{ $t('pages.training.benefits.title') }}</h2>
        <div class="benefits__grid">
          <article class="benefit-card">
            <div class="benefit-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>{{ $t('pages.training.benefits.items.trainers') }}</h3>
          </article>
          <article class="benefit-card">
            <div class="benefit-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3>{{ $t('pages.training.benefits.items.interactive') }}</h3>
          </article>
          <article class="benefit-card">
            <div class="benefit-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3>{{ $t('pages.training.benefits.items.practical') }}</h3>
          </article>
          <article class="benefit-card">
            <div class="benefit-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3>{{ $t('pages.training.benefits.items.diagnostic') }}</h3>
          </article>
          <article class="benefit-card">
            <div class="benefit-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3>{{ $t('pages.training.benefits.items.cases') }}</h3>
          </article>
          <article class="benefit-card">
            <div class="benefit-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3>{{ $t('pages.training.benefits.items.templates') }}</h3>
          </article>
        </div>
      </section>
    </v-container>

    <!-- Methodology -->
    <section class="methodology">
      <v-container>
        <h2 class="section-heading">{{ $t('pages.training.methodology.title') }}</h2>
        <div class="methodology__timeline">
          <div class="timeline-step">
            <div class="timeline-step__number">01</div>
            <h3>{{ $t('pages.training.methodology.diagnosis.title') }}</h3>
            <p>{{ $t('pages.training.methodology.diagnosis.description') }}</p>
          </div>
          <div class="timeline-connector"></div>
          <div class="timeline-step">
            <div class="timeline-step__number">02</div>
            <h3>{{ $t('pages.training.methodology.design.title') }}</h3>
            <p>{{ $t('pages.training.methodology.design.description') }}</p>
          </div>
          <div class="timeline-connector"></div>
          <div class="timeline-step">
            <div class="timeline-step__number">03</div>
            <h3>{{ $t('pages.training.methodology.sustainability.title') }}</h3>
            <p>{{ $t('pages.training.methodology.sustainability.description') }}</p>
          </div>
        </div>
      </v-container>
    </section>

    <!-- CTA -->
    <section class="cta">
      <v-container class="cta__inner">
        <h2>{{ $t('pages.training.cta.title') }}</h2>
        <p>{{ $t('pages.training.cta.subtitle') }}</p>
        <a href="https://training.ccsconsulting.com.sa/" class="btn btn--white">
          {{ $t('pages.training.cta.button') }}
        </a>
      </v-container>
    </section>

    <MainFooter />
  </div>
</template>

<script lang="ts" setup>
import MainFooter from '@/components/layout/MainFooter.vue'
import MainHeader from '@/components/layout/MainHeader.vue'
import heroBg from '@/assets/images/undraw-teaching.svg'
</script>

<style scoped lang="scss">
/* ── Base ── */
.training-program {
  min-height: 100vh;
  color: #333;
  background: #fafafa;
}

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.8rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.btn--primary {
  background: #4d8d3e;
  color: #fff;
  box-shadow: 0 4px 14px rgba(77, 141, 62, 0.35);
}

.btn--primary:hover {
  background: #3d7532;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(77, 141, 62, 0.45);
}

.btn--outline-dark {
  background: transparent;
  color: #331B3B;
  border: 2px solid rgba(51, 27, 59, 0.25);
}

.btn--outline-dark:hover {
  background: rgba(51, 27, 59, 0.05);
  border-color: #331B3B;
}

.btn--white {
  background: #fff;
  color: #331B3B;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

.btn--white:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.2);
}

/* ── Hero ── */
.hero {
  color: #333;
  padding: 6rem 0 5rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, #f8f9fa 0%, #e9ecef 40%, #f1f5ee 100%);
}

.hero__bg-illustration {
  position: absolute;
  right: -2%;
  bottom: -5%;
  width: 420px;
  height: auto;
  opacity: 0.1;
  pointer-events: none;
}

.hero__inner {
  max-width: 780px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero__badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(77, 141, 62, 0.1);
  border: 1px solid rgba(77, 141, 62, 0.25);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4d8d3e;
  margin-bottom: 1.2rem;
}

.hero__title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 1rem;
  letter-spacing: -0.5px;
  color: #331B3B;
}

.hero__subtitle {
  font-size: 1.15rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* ── Section heading ── */
.section-heading {
  font-size: 1.8rem;
  font-weight: 800;
  color: #331B3B;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
}

.section-heading::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin: 0.8rem auto 0;
  background: linear-gradient(90deg, #4d8d3e, #db0812);
  border-radius: 2px;
}

/* ── Overview ── */
.overview {
  padding: 4rem 0 3rem;
}

.overview__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.overview__grid p {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  line-height: 1.8;
  color: #444;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
}

.overview__grid p:hover {
  border-bottom-color: #4d8d3e;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* ── Benefits ── */
.benefits {
  padding: 0 0 4rem;
}

.benefits__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.benefit-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}

.benefit-card__icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(77, 141, 62, 0.1), rgba(77, 141, 62, 0.05));
  color: #4d8d3e;
  transition: all 0.3s ease;
}

.benefit-card:hover .benefit-card__icon {
  background: linear-gradient(135deg, #4d8d3e, #3a6e2f);
  color: #fff;
  transform: scale(1.1);
}

.benefit-card h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #331B3B;
  line-height: 1.5;
}

/* ── Methodology ── */
.methodology {
  background: #f8fafc;
  padding: 4rem 0;
  color: #333;
}

.methodology__timeline {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}

.timeline-step {
  flex: 1;
  max-width: 320px;
  text-align: center;
  padding: 0 1.5rem;
}

.timeline-step__number {
  width: 56px;
  height: 56px;
  margin: 0 auto 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #4d8d3e, #3a6e2f);
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 4px 16px rgba(77, 141, 62, 0.4);
}

.timeline-step h3 {
  margin: 0 0 0.6rem;
  font-size: 1.15rem;
  font-weight: 700;
}

.timeline-step p {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.timeline-connector {
  width: 60px;
  min-width: 40px;
  height: 2px;
  background: linear-gradient(90deg, rgba(77, 141, 62, 0.4), rgba(219, 8, 18, 0.4));
  margin-top: 28px;
  border-radius: 2px;
  flex-shrink: 0;
}

/* ── CTA ── */
.cta {
  background: linear-gradient(135deg, #4d8d3e 0%, #3a6e2f 50%, #2d5a24 100%);
  padding: 4rem 0;
  text-align: center;
  color: #fff;
}

.cta__inner {
  max-width: 640px;
}

.cta h2 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.8rem;
}

.cta p {
  margin: 0 0 2rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
}

/* ── Responsive ── */
@media screen and (max-width: 1024px) {
  .overview__grid {
    grid-template-columns: 1fr;
  }

  .benefits__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .methodology__timeline {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .timeline-connector {
    width: 2px;
    height: 40px;
    margin: 0;
  }
}

@media screen and (max-width: 640px) {
  .hero {
    padding: 3rem 0 2.5rem;
  }

  .hero__title {
    font-size: 2rem;
  }

  .hero__bg-illustration {
    display: none;
  }

  .benefits__grid {
    grid-template-columns: 1fr;
  }

  .section-heading {
    font-size: 1.5rem;
  }
}
</style>
