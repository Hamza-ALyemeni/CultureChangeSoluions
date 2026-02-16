<template>
  <MainHeader/>
  <v-container>
    <div class="cmdp-page">
      <div class="cmdp-header">
        <h1 class="cmdp-title">{{ $t('pages.cmdp.title') }}</h1>
        <p class="cmdp-subtitle">{{ $t('pages.cmdp.subtitle') }}</p>
      </div>

       <div class="cmdp-section structure-section">
        <h2 class="section-title">{{ $t('pages.cmdp.sections.structure') }}</h2>
        <div class="brochure-content">
          <!-- Platform Header -->
          <div class="platform-header">
            <img :src="laptopImage" alt="CMDP Platform" class="platform-image" />
            <h3 class="platform-title">{{ $t('pages.cmdp.brochure.platformTitlePre') }} <span class="platform-title-red">{{ $t('pages.cmdp.brochure.platformTitleHighlight') }}</span> {{ $t('pages.cmdp.brochure.platformTitlePost') }}</h3>
          </div>

          <!-- Key Benefits -->
          <div class="key-benefits">
            <h4 class="benefits-heading">{{ $t('pages.cmdp.brochure.keyBenefits') }}</h4>
            <div class="benefits-list">
              <div class="benefit-item">
                <span class="benefit-icon">&#10148;</span>
                <p><strong>{{ $t('pages.cmdp.brochure.benefits.delivering') }}</strong> {{ $t('pages.cmdp.brochure.benefits.deliveringDesc') }}</p>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">&#10148;</span>
                <p><strong>{{ $t('pages.cmdp.brochure.benefits.adopting') }}</strong> {{ $t('pages.cmdp.brochure.benefits.adoptingDesc') }}</p>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">&#10148;</span>
                <p><strong>{{ $t('pages.cmdp.brochure.benefits.helping') }}</strong> {{ $t('pages.cmdp.brochure.benefits.helpingDesc') }}</p>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">&#10148;</span>
                <p><strong>{{ $t('pages.cmdp.brochure.benefits.capturing') }}</strong> {{ $t('pages.cmdp.brochure.benefits.capturingDesc') }}</p>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">&#10148;</span>
                <p><strong>{{ $t('pages.cmdp.brochure.benefits.supporting') }}</strong> {{ $t('pages.cmdp.brochure.benefits.supportingDesc') }}</p>
              </div>
            </div>
          </div>

          <!-- Ecosystem Banner -->
          <div class="ecosystem-banner">
            <p>
              {{ $t('pages.cmdp.brochure.ecosystemPre') }}
              <strong class="ecosystem-highlight">{{ $t('pages.cmdp.brochure.ecosystemHighlight1') }}</strong>
              {{ $t('pages.cmdp.brochure.ecosystemMid') }}
              <strong class="ecosystem-highlight-red">{{ $t('pages.cmdp.brochure.ecosystemHighlight2') }}</strong>
              {{ $t('pages.cmdp.brochure.ecosystemPost') }}
            </p>
          </div>

          <!-- Three Pillars -->
          <div class="pillars-grid">
            <div class="pillar-card pillar-resources">
              <h4 class="pillar-title">{{ $t('pages.cmdp.brochure.pillars.resources') }}</h4>
              <ul>
                <li>{{ $t('pages.cmdp.brochure.pillars.resourceAmbassadors') }}</li>
                <li>{{ $t('pages.cmdp.brochure.pillars.resourceProjects') }}</li>
                <li>{{ $t('pages.cmdp.brochure.pillars.resourcePulseChecks') }}</li>
              </ul>
            </div>
            <div class="pillar-card pillar-training">
              <h4 class="pillar-title">{{ $t('pages.cmdp.brochure.pillars.training') }}</h4>
              <ul>
                <li>{{ $t('pages.cmdp.brochure.pillars.trainingStrategy') }}</li>
                <li>{{ $t('pages.cmdp.brochure.pillars.trainingValues') }}</li>
                <li>{{ $t('pages.cmdp.brochure.pillars.trainingCustomized') }}</li>
              </ul>
            </div>
            <div class="pillar-card pillar-storytelling">
              <h4 class="pillar-title">{{ $t('pages.cmdp.brochure.pillars.storytelling') }}</h4>
              <ul>
                <li>{{ $t('pages.cmdp.brochure.pillars.storytellingNews') }}</li>
                <li>{{ $t('pages.cmdp.brochure.pillars.storytellingSuccess') }}</li>
                <li>{{ $t('pages.cmdp.brochure.pillars.storytellingReward') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="cmdp-section">
        <h2 class="section-title">{{ $t('pages.cmdp.sections.overview') }}</h2>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q1.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q1.a1') }}</p>
            <p>{{ $t('pages.cmdp.q1.a2') }}</p>
            <p>{{ $t('pages.cmdp.q1.a3') }}</p>
          </div>
        </div>

        <div class="summary-content" style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, rgba(77, 141, 62, 0.1) 0%, rgba(219, 8, 18, 0.1) 100%); border-radius: 8px; border-left: 4px solid #DB0812;">
          <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 15px;">{{ $t('pages.cmdp.summary.p1') }}</p>
          <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 15px;">{{ $t('pages.cmdp.summary.p2') }}</p>
          <p style="font-size: 16px; line-height: 1.8; color: #333;">{{ $t('pages.cmdp.summary.p3') }}</p>
        </div>
      </div>

      <div class="cmdp-section">
        <h2 class="section-title">{{ $t('pages.cmdp.sections.technical') }}</h2>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q2.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q2.answer') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q3.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q3.a1') }}</p>
            <p>{{ $t('pages.cmdp.q3.a2') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q4.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q4.a1') }}</p>
            <p>{{ $t('pages.cmdp.q4.a2') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q5.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q5.answer') }}</p>
          </div>
        </div>
      </div>

      <div class="cmdp-section">
        <h2 class="section-title">{{ $t('pages.cmdp.sections.customization') }}</h2>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q6.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q6.a1') }}</p>
            <p>{{ $t('pages.cmdp.q6.a2') }}</p>
            <ul>
              <li>{{ $t('pages.cmdp.q6.features.f1') }}</li>
              <li>{{ $t('pages.cmdp.q6.features.f2') }}</li>
              <li>{{ $t('pages.cmdp.q6.features.f3') }}</li>
              <li>{{ $t('pages.cmdp.q6.features.f4') }}</li>
              <li>{{ $t('pages.cmdp.q6.features.f5') }}</li>
              <li>{{ $t('pages.cmdp.q6.features.f6') }}</li>
            </ul>
            <p><strong>{{ $t('pages.cmdp.q6.conclusion') }}</strong></p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q7.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q7.a1') }}</p>
            <p>{{ $t('pages.cmdp.q7.a2') }}</p>
            <p>{{ $t('pages.cmdp.q7.a3') }}</p>
            <ul>
              <li><strong>{{ $t('pages.cmdp.q7.options.branding') }}</strong> {{ $t('pages.cmdp.q7.options.brandingDesc') }}</li>
              <li><strong>{{ $t('pages.cmdp.q7.options.content') }}</strong> {{ $t('pages.cmdp.q7.options.contentDesc') }}</li>
              <li><strong>{{ $t('pages.cmdp.q7.options.ai') }}</strong> {{ $t('pages.cmdp.q7.options.aiDesc') }}</li>
              <li><strong>{{ $t('pages.cmdp.q7.options.integrations') }}</strong> {{ $t('pages.cmdp.q7.options.integrationsDesc') }}</li>
            </ul>
            <p>{{ $t('pages.cmdp.q7.a4') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q8.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q8.answer') }}</p>
          </div>
        </div>
      </div>

      <div class="cmdp-section">
        <h2 class="section-title">{{ $t('pages.cmdp.sections.value') }}</h2>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q9.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q9.a1') }}</p>
            <p>{{ $t('pages.cmdp.q9.a2') }}</p>
            <p>{{ $t('pages.cmdp.q9.a3') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q10.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q10.a1') }}</p>
            <p>{{ $t('pages.cmdp.q10.a2') }}</p>
            <ul>
              <li>{{ $t('pages.cmdp.q10.indicators.i1') }}</li>
              <li>{{ $t('pages.cmdp.q10.indicators.i2') }}</li>
              <li>{{ $t('pages.cmdp.q10.indicators.i3') }}</li>
              <li>{{ $t('pages.cmdp.q10.indicators.i4') }}</li>
            </ul>
            <p>{{ $t('pages.cmdp.q10.a3') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q11.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q11.a1') }}</p>
            <p>{{ $t('pages.cmdp.q11.a2') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q12.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q12.answer') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q13.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q13.a1') }}</p>
            <p>{{ $t('pages.cmdp.q13.a2') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q14.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q14.a1') }}</p>
            <ul>
              <li>{{ $t('pages.cmdp.q14.items.i1') }}</li>
              <li>{{ $t('pages.cmdp.q14.items.i2') }}</li>
              <li>{{ $t('pages.cmdp.q14.items.i3') }}</li>
              <li>{{ $t('pages.cmdp.q14.items.i4') }}</li>
            </ul>
            <p>{{ $t('pages.cmdp.q14.a2') }}</p>
          </div>
        </div>
      </div>

      <div class="cmdp-section">
        <h2 class="section-title">{{ $t('pages.cmdp.sections.additional') }}</h2>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q15.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q15.answer') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q16.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q16.answer') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q17.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q17.a1') }}</p>
            <p>{{ $t('pages.cmdp.q17.a2') }}</p>
          </div>
        </div>

        <div class="qa-item">
          <h3 class="question">{{ $t('pages.cmdp.q18.question') }}</h3>
          <div class="answer">
            <p>{{ $t('pages.cmdp.q18.a1') }}</p>
            <p>{{ $t('pages.cmdp.q18.a2') }}</p>
          </div>
        </div>
      </div>

    </div>
  </v-container>
  <MainFooter/>
</template>

<script setup lang="ts">
import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
import laptopImage from "@/assets/images/laptop-picture.png";
</script>

<style lang="scss" scoped>
.cmdp-page {
  padding: 40px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
}

.cmdp-header {
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
}

.cmdp-title {
  font-size: 48px;
  font-weight: 700;
  color: #331B3B;
  margin-bottom: 15px;
  position: relative;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: linear-gradient(to right, #4D8D3E, #DB0812);
  }
}

.cmdp-subtitle {
  font-size: 24px;
  font-weight: 500;
  color: #666;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
}

.cmdp-section {
  margin-bottom: 50px;
  padding: 30px;
  background: rgba(102, 102, 102, 0.05);
  border-radius: 10px;
  border-left: 5px solid #4D8D3E;

  @media screen and (max-width: 768px) {
    padding: 20px 15px;
    margin-bottom: 30px;
  }
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #331B3B;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
}

.qa-item {
  margin-bottom: 40px;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
    margin-bottom: 25px;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.question {
  font-size: 20px;
  font-weight: 700;
  color: #DB0812;
  margin-bottom: 15px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
}

.answer {
  font-size: 16px;
  line-height: 1.8;
  color: #333;

  p {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #4D8D3E;
    font-weight: 600;
  }

  ul {
    margin: 15px 0;
    padding-left: 30px;

    li {
      margin-bottom: 10px;
      line-height: 1.6;
    }
  }
}

/* Brochure Structured Content */
.brochure-content {
  max-width: 900px;
  margin: 0 auto;
}

.platform-header {
  text-align: center;
  margin-bottom: 30px;
}

.platform-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
}

.platform-title {
  font-size: 22px;
  font-weight: 600;
  color: #331B3B;
  margin-top: 8px;
  line-height: 1.4;
}

.platform-title-red {
  color: #DB0812;
  font-weight: 700;
}

.key-benefits {
  background: #fff;
  border-radius: 12px;
  padding: 25px 30px;
  margin-bottom: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.benefits-heading {
  font-size: 20px;
  font-weight: 700;
  color: #DB0812;
  margin-bottom: 18px;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.benefit-icon {
  color: #4D8D3E;
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.benefit-item p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
}

.benefit-item strong {
  color: #4D8D3E;
  font-weight: 700;
  font-size: 19px;
}

.ecosystem-banner {
  background: linear-gradient(135deg, #040404 0%, #21800B 100%);
  border-radius: 12px;
  padding: 30px 35px;
  margin-bottom: 25px;
  text-align: center;
}

.ecosystem-banner p {
  font-size: 18px;
  line-height: 1.8;
  color: #e0e0e0;
  margin: 0;
}

.ecosystem-highlight {
  color: #fff;
  font-size: 20px;
  letter-spacing: 1px;
}

.ecosystem-highlight-red {
  color: #DB0812;
  font-size: 20px;
  letter-spacing: 1px;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.pillar-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pillar-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.pillar-title {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 16px;
  margin: 0;
  text-align: center;
}

.pillar-resources .pillar-title {
  background: #DB0812;
}

.pillar-training .pillar-title {
  background: #4D8D3E;
}

.pillar-storytelling .pillar-title {
  background: #DB0812;
}

.pillar-card ul {
  list-style: none;
  padding: 16px 20px;
  margin: 0;
  background: #fff;
}

.pillar-card ul li {
  padding: 8px 0;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.pillar-card ul li:last-child {
  border-bottom: none;
}

.pillar-card ul li::before {
  content: "▸";
  color: #4D8D3E;
  font-weight: bold;
  flex-shrink: 0;
}

.pillar-storytelling ul li::before {
  color: #DB0812;
}

@media screen and (max-width: 768px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }

  .platform-title {
    font-size: 18px;
  }

  .platform-image {
    max-width: 100%;
  }

  .ecosystem-banner {
    padding: 20px;
  }

  .ecosystem-banner p {
    font-size: 16px;
  }

  .ecosystem-highlight,
  .ecosystem-highlight-red {
    font-size: 18px;
  }

  .key-benefits {
    padding: 20px;
  }
}
</style>

