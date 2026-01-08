<template>
  <div class="training-program">
    <MainHeader />
    <v-container class="page-body">
      <section class="hero">
        <p class="hero__eyebrow">OC Training Accreditation</p>
        <h1 class="hero__title">Join Our Accredited Training Program</h1>
        <p class="hero__subtitle">
          A 3-day CCS Training Program to equip participants with skills and confidence
        </p>
        <div class="hero__actions">
          <router-link to="#" class="cta-button">
            Reserve Your Seat
          </router-link>
          <span class="hero__note">Accredited certificates included.</span>
        </div>
      </section>

      <section class="overview">
        <div class="overview__content">
          <h2 class="section-title">Program Overview</h2>
          <p>
            Our accredited training programs are designed to develop individuals by
            introducing them to the culture from diagnosis to solutions and practical
            applications, not just theoretical knowledge transfer.
          </p>
          <p>
            With over 25 years of experience, our training program offers practical tools
            and techniques led by certified trainers with deep field experience in
            organizational culture, institutional development, and change management.
          </p>
          <p>
            Our training focuses on supporting leaders and teams in understanding the
            organization's cultural reality, analyzing behavioral and organizational
            challenges, and then designing applicable solutions that translate into daily
            practices that improve the working environment and performance.
          </p>
          <p>
            Our programs are supported by accredited certificates from international and
            local bodies and employ an integrated methodology that combines diagnosis,
            analysis, design, and delivery, ensuring that learning is a practical
            experience with a sustainable impact in the organization. Our goal is not
            just training for the sake of knowledge, but empowering trainees to transform
            what they learn into tangible behaviors practiced daily to support their
            organizations' success.
          </p>
        </div>
      </section>

      <section class="grid-section">
        <h2 class="section-title">Program Benefits</h2>
        <div class="highlights">
          <article >
            <h3>Accredited Trainers in Organizational Culture Change</h3>
          </article>
          <article >
            <h3>Interactive Approach Through Various Exercises to Facilitate Information Retention</h3>
          </article>
          <article >
            <h3>A Practical, Step-by-Step Approach</h3>
          </article>
          <article >
            <h3>Accredited Diagnostic and Measurement Tools</h3>
          </article>
          <article >
            <h3>Local &amp; Global Real-Life Business Cases</h3>
          </article>
          <article >
            <h3>Unique Templates, Guides and Workbooks to Support Learning</h3>
          </article>
        </div>
      </section>

      <section class="methodology">
        <h2 class="section-title">Integrated Methodology</h2>
        <div class="steps">
          <div class="step">
            <span>01</span>
            <h3>Diagnosis</h3>
            <p>Use effective tools to identify cultural strengths and gaps.</p>
          </div>
          <div class="step">
            <span>02</span>
            <h3>Design & Deliver</h3>
            <p>Design effective solutions and implement them to address cultural gaps in the organization.</p>
          </div>
          <div class="step">
            <span>03</span>
            <h3>Sustainability</h3>
            <p>Use KPIs and dashboards to document the progress and identify areas of improvement in the organizational culture.</p>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div>
          <h2>Ready to lead culture change in your organization?</h2>
          <p>Secure your place in CCS Training Program.</p>
        </div>
        <router-link to="#" class="cta-button">
          Join Our Training Program
        </router-link>
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
  text-align: center;
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
