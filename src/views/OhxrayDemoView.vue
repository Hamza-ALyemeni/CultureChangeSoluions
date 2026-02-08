<template>
  <div class="ohxray-page">
    <MainHeader />

    <section class="intro">
      <h2>
        <span class="brand-green">OHX-</span><span class="brand-red">RAY</span> {{ $t('pages.ohxrayDemo.title') }}
      </h2>
      <p class="intro-subtitle">{{ $t('pages.ohxrayDemo.subtitle') }}</p>

      <div class="intro-actions">
        <a class="demo-link" href="https://demo.ohxray.com" target="_blank" rel="noopener">{{ $t('pages.ohxrayDemo.startDemo') }}</a>
      </div>
    </section>

    <section class="demo-section">
      <div class="demo-header">
        <h3>{{ $t('pages.ohxrayDemo.stepsTitle') }}</h3>
        <p>{{ $t('pages.ohxrayDemo.stepsSubtitle') }}</p>
      </div>

      <div class="demo-steps">
        <div class="demo-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step1.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step1.description') }}</p>
            <div class="step-image">
              <img :src="rigesterDemo" alt="Registration screen demo" />
            </div>
          </div>
        </div>

        <div class="demo-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step2.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step2.description') }}</p>
            <div class="step-image">
              <img :src="demoLogin" alt="Login and dashboard access" />
            </div>
          </div>
        </div>

        <div class="demo-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step3.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step3.description') }}</p>
            <div class="step-image">
              <img :src="dashboardDemo" alt="Organization page navigation" />
            </div>
          </div>
        </div>

        <div class="demo-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step4.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step4.description') }}</p>
            <div class="step-image">
              <img :src="addEmployee" alt="Add new employee action" />
            </div>
          </div>
        </div>

        <div class="demo-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step5.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step5.description') }}</p>
            <div class="step-image">
              <img :src="fillEmployeeData" alt="Employee data entry form" />
            </div>
          </div>
        </div>

        <div class="demo-step">
          <div class="step-number">6</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step6.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step6.description') }}</p>
            <div class="step-image">
              <img :src="surveyTab" alt="Surveys tab view" />
            </div>
          </div>
        </div>

        <div class="demo-step">
          <div class="step-number">7</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step7.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step7.description') }}</p>
            <div class="step-image">
              <img :src="sendSurvey" alt="Send survey screen" />
            </div>
          </div>
        </div>

        <div class="demo-step">
          <div class="step-number">8</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step8.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step8.description') }}</p>
            <div class="step-image">
              <img :src="surveyTab" alt="Surveys tab view" />
            </div>
          </div>
        </div>

         <div class="demo-step">
          <div class="step-number">9</div>
          <div class="step-content">
            <h5>{{ $t('pages.ohxrayDemo.steps.step9.title') }}</h5>
            <p>{{ $t('pages.ohxrayDemo.steps.step9.description') }}</p>
            <div class="step-image">
              <img :src="goSurveysTabReport" alt="Surveys tab view" />
            </div>
          </div>
        </div>
      </div>

      <div class="support-callout">
        <h5>{{ $t('pages.ohxrayDemo.supportTitle') }}</h5>
        <p>{{ $t('pages.ohxrayDemo.supportText') }} <a href="mailto:info@ohxray.com">info@ohxray.com</a>.</p>
      </div>

    </section>

    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainHeader from "@/components/layout/MainHeader.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
import rigesterDemo from "@/assets/images/rigester-demo.png";
import demoLogin from "@/assets/images/demo-login.png";
import dashboardDemo from "@/assets/images/dashboard-demo.png";
import addEmployee from "@/assets/images/add-employee.png";
import fillEmployeeData from "@/assets/images/fill-employee-data.png";
import surveyTab from "@/assets/images/survey-tab.png";
import sendSurvey from "@/assets/images/send-survey.png";
import goSurveysTabReport from "@/assets/images/go-surveys-tab-report.png";
</script>

<style scoped lang="scss">
.ohxray-page{
  position:relative;
  background:#f8fafc;
  color:#1f2933;
  min-height:100vh;
}

.intro{
  text-align:center;
  padding:32px 16px 8px;
}

.intro h2{
  font-size:32px;
  margin-bottom:8px;
  font-weight:700;
}

.intro-subtitle{
  color:#4b5563;
  font-size:18px;
  margin:0 auto 14px;
}

.brand-green{ color:#4d8d3e; }
.brand-red{ color:#db0e15; }

.intro-actions{
  display:flex;
  gap:12px;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  margin-bottom:12px;
}

.demo-link{
  display:inline-block;
  background:#db0e15;
  color:#fff;
  padding:12px 18px;
  border-radius:10px;
  text-decoration:none;
  font-weight:700;
  transition:background 0.2s ease, transform 0.2s ease;
}

.demo-link:hover{
  background:#b70b11;
  transform:translateY(-1px);
}

.secondary-link{
  display:inline-block;
  padding:12px 18px;
  border-radius:10px;
  text-decoration:none;
  font-weight:700;
  color:#213547;
  border:1px solid #d1d5db;
  background:#fff;
  transition:transform 0.2s ease, box-shadow 0.2s ease;
}

.secondary-link:hover{
  transform:translateY(-1px);
  box-shadow:0 10px 24px rgba(0,0,0,0.06);
}

.demo-section{
  background:#f6f7f9;
  padding:34px 16px 70px;
  margin-top:16px;
  border-top:4px solid #4d8d3e;
}

.demo-header{
  text-align:center;
  max-width:820px;
  margin:0 auto 18px;
}

.demo-header h3{
  font-size:26px;
  color:#213547;
  margin-bottom:10px;
}

.demo-header p{
  font-size:16px;
  color:#4b5563;
  margin-bottom:0;
}

.demo-steps{
  display:grid;
  grid-template-columns:1fr;
  gap:24px;
  max-width:900px;
  margin:0 auto;
}

.demo-step{
  background:#fff;
  border:1px solid #e5e7eb;
  border-radius:16px;
  padding:18px;
  display:flex;
  gap:12px;
  box-shadow:0 10px 30px rgba(0,0,0,0.05);
}

.step-number{
  width:36px;
  height:36px;
  border-radius:50%;
  background:#4d8d3e;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
  flex-shrink:0;
}

.step-content h5{
  margin:0 0 6px;
  font-size:18px;
  color:#111827;
}

.step-content p{
  margin:0 0 12px;
  color:#4b5563;
  font-size:14px;
  line-height:1.6;
}

.step-image{
  border:1px solid #e5e7eb;
  border-radius:12px;
  overflow:hidden;
  background:#f8fafc;
  box-shadow:0 6px 20px rgba(0,0,0,0.04);
}

.step-image img{
  display:block;
  width:100%;
  height:auto;
}

.support-callout{
  margin:10px auto 0;
  max-width:900px;
  background:white;
  color:black;
  border-radius:16px;
  padding:18px 20px;
  border:1px solid #4d8d3e;
  box-shadow:0 12px 30px rgba(0,0,0,0.1);
}

.support-callout h5{
  margin:0 0 6px;
  font-size:18px;
}

.support-callout p{
  margin:0;
  font-size:14px;
}

.support-callout a{
  color:#4d8d3e;
  font-weight:700;
  text-decoration:none;
}

.support-callout a:hover{
  text-decoration:underline;
}


@media screen and (max-width: 768px){
  .intro h2{ font-size:26px; }
  .intro-subtitle{ font-size:16px; }
  .demo-step{ flex-direction:column; }
  .step-number{ width:34px; height:34px; }
}
</style>


