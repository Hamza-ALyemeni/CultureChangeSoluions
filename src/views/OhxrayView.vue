<template>
  <div class="ohxray-page">
    <MainHeader/>
        <section class="intro">
          <h2>{{ $t('pages.ohxray.intro.title') }} <span class="brand-green">OHX-</span><span class="brand-red">RAY</span></h2>
          <p class="intro-subtitle">{{ $t('pages.ohxray.intro.subtitle') }}</p>
          <div class="intro-actions">
            <RouterLink class="primary-cta" :to="`/${$route.params.locale}/ohxray-demo`">{{ $t('pages.ohxray.freeLiveDemo') }}</RouterLink>
          </div>
        </section>

        <div class="hero-images">
            <img :src="certificatesImage" alt="Certificates" />
            <img :src="scienceResultsImage" alt="Science Results" />
        </div>

        <div class="video-wrapper">
           <video ref="ohxVideo" class="hero-video" controls>
                <source src="@/assets/OHX-RAY_VIDEO.mp4" type="video/mp4" />
                {{ $t('pages.ohxray.videoNotSupported') }}
            </video>
        </div>
        <!-- Mobile image -->
        <img src="@/assets/images/just-dimenstions.png" alt="ohxray" class="mobile-img">
        <div class="equal-container">

            <div class="equal-box Ohxray-Unique first-section">
                <h4>{{ $t('pages.ohxray.unique.title') }} <br/> {{ $t('pages.ohxray.unique.titleBreak') }}</h4>
                <p v-html="$t('pages.ohxray.unique.description')"></p>
                <div class="stats">
                    <div id="first-stats">
                        <div id="org-numbers">{{ $t('pages.ohxray.unique.orgCount') }}</div>
                        <div id="first-stats-text">{{ $t('pages.ohxray.unique.orgText') }}</div>
                    </div>
                    <div id="second-stats">
                        <div id="emp-numbers">{{ $t('pages.ohxray.unique.empCount') }}</div>
                        <div  id="second-stats-text">{{ $t('pages.ohxray.unique.empText') }}</div>
                    </div>
                </div>
            </div>
            <div class="equal-box">
                <img src="@/assets/images/dimenstions_and_practices_and_scale.jpeg" alt="ohxray" class="desktop-image">
            </div>
        </div>
        <div class="equal-container">
            <div class="equal-box">
                <img src="@/assets/images/just-dimenstions.png" alt="ohxray" class="desktop-image" style="height:500px">
            </div>
            <div class="equal-box Ohxray-Unique">
                <h4 class="second-section">{{ $t('pages.ohxray.experience.title') }}</h4>
                <p v-html="$t('pages.ohxray.experience.description')"></p>
            </div>
        </div>
         <div class="equal-container samples">
            <div class="equal-box Ohxray-Unique">
                <h4>{{ $t('pages.ohxray.samples.title') }} <br/> {{ $t('pages.ohxray.samples.titleBreak') }}</h4>
                <ul>
                    <li>{{ $t('pages.ohxray.samples.holisticImage') }}</li>
                    <li>{{ $t('pages.ohxray.samples.benchmarkReport') }}</li>
                </ul>
            </div>
            <div class="equal-box" style="display: flex; flex-direction: column;">
                <!-- First Row: Two images side by side -->
                <div style="display: flex; flex-direction: row; gap: 20px;">
                    <img src="@/assets/images/overall-score.jpeg" alt="ohxray" class="desktop-image" style="height: 100%; width: 50%;">
                    <img src="@/assets/images/Overall_Image_Sample.jpeg" alt="ohxray" class="desktop-image" style="height: 100%; width: 50%;">
                </div>
                <!-- Second Row: Third image below -->
                <img src="@/assets/images/Benchmark_Sample.jpeg" alt="ohxray" class="desktop-image" style="height: 50%; width: 60%; margin-top: 20px; align-self: center;">
            </div>
        </div>

        <section class="recognition-section">
            <div class="recognition-header">
                <h3>{{ $t('pages.ohxray.recognition.title') }}</h3>
                <p class="lede" v-html="$t('pages.ohxray.recognition.description')"></p>
            </div>
            <div class="certificate-table">
                <div class="certificate-label">
                    <span>{{ $t('pages.ohxray.certificateLevel') }}</span>
                </div>
                <div class="certificate-cards">
                    <div v-for="level in certificateLevels" :key="level.label" class="certificate-card">
                        <img :src="level.image" :alt="`${level.label} OHX-RAY badge`" />
                        <p class="certificate-name">{{ level.label }}</p>
                        <p class="certificate-criteria">{{ level.criteria }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="accreditation-section">
            <div class="accreditation-header">
                <h3>{{ $t('pages.ohxray.accreditation.title') }}</h3>
                <p class="lede">{{ $t('pages.ohxray.accreditation.subtitle') }}</p>
            </div>
            <div class="accreditation-grid">
                <div class="journey-track">
                    <div
                        v-for="(step, index) in accreditationSteps"
                        :key="step"
                        class="journey-step"
                    >
                        <div class="journey-step__label">{{ step }}</div>
                        <div v-if="index < accreditationSteps.length - 1" class="journey-step__arrow">&darr;</div>
                    </div>
                </div>
                <div class="journey-benefits">
                    <h4 class="journey-benefits__title">{{ $t('pages.ohxray.accreditation.benefitsTitle') }}</h4>
                    <ul>
                        <li v-for="benefit in accreditationBenefits" :key="benefit">{{ benefit }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Scientific Validation Section -->
        <section class="validation-section">
            <div class="validation-header">
                <span class="validation-badge">{{ $t('pages.ohxray.validation.badge') }}</span>
                <h3>{{ $t('pages.ohxray.validation.title') }} <span class="highlight">{{ $t('pages.ohxray.validation.titleHighlight') }}</span></h3>
                <p class="validation-intro" v-html="validationIntroText"></p>
            </div>

            <div class="validation-methods">
                <div class="method-card">
                    <div class="method-card-front">
                        <div class="method-icon alpha-icon">
                            <span class="greek-letter">α</span>
                        </div>
                        <h4 class="method-title">{{ $t('pages.ohxray.validation.cronbach.title') }}</h4>
                        <p class="method-desc" v-html="cronbachDescription"></p>
                        <div class="validation-badges">
                            <div class="stat-badge">
                                <div class="stat-icon reliable">✓</div>
                                <span>{{ $t('pages.ohxray.validation.cronbach.badge') }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="method-card-back">
                        <div class="method-icon alpha-icon">
                            <span class="greek-letter">α</span>
                        </div>
                        <p class="method-result">Alpha results: <strong>0.9786</strong></p>
                        <p class="method-result-label">Excellent internal consistency</p>
                    </div>
                </div>

                <div class="method-card">
                    <div class="method-card-front">
                        <div class="method-icon efa-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="3"/>
                                <circle cx="6" cy="6" r="2"/>
                                <circle cx="18" cy="6" r="2"/>
                                <circle cx="6" cy="18" r="2"/>
                                <circle cx="18" cy="18" r="2"/>
                                <line x1="12" y1="9" x2="7" y2="7"/>
                                <line x1="12" y1="9" x2="17" y2="7"/>
                                <line x1="12" y1="15" x2="7" y2="17"/>
                                <line x1="12" y1="15" x2="17" y2="17"/>
                            </svg>
                        </div>
                        <h4 class="method-title">{{ $t('pages.ohxray.validation.efa.title') }}</h4>
                        <p class="method-desc">{{ $t('pages.ohxray.validation.efa.description') }}</p>
                        <div class="validation-badges">
                            <div class="stat-badge">
                                <div class="stat-icon sound">✓</div>
                                <span>{{ $t('pages.ohxray.validation.efa.badge') }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="method-card-back">
                        <div class="method-icon efa-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="3"/>
                                <circle cx="6" cy="6" r="2"/>
                                <circle cx="18" cy="6" r="2"/>
                                <circle cx="6" cy="18" r="2"/>
                                <circle cx="18" cy="18" r="2"/>
                                <line x1="12" y1="9" x2="7" y2="7"/>
                                <line x1="12" y1="9" x2="17" y2="7"/>
                                <line x1="12" y1="15" x2="7" y2="17"/>
                                <line x1="12" y1="15" x2="17" y2="17"/>
                            </svg>
                        </div>
                        <p class="method-result">EFA results: KMO: <strong>0.9870</strong> Marvelous</p>
                        <p class="method-result-label">Bartlett's: <strong>&lt; 0.001</strong> Excellent</p>
                    </div>
                </div>

                <div class="method-card">
                    <div class="method-card-front">
                        <div class="method-icon cfa-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 12l2 2 4-4"/>
                                <circle cx="12" cy="12" r="9"/>
                                <path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
                            </svg>
                        </div>
                        <h4 class="method-title">{{ $t('pages.ohxray.validation.cfa.title') }}</h4>
                        <p class="method-desc" v-html="cfaDescription"></p>
                        <div class="validation-badges">
                            <div class="stat-badge">
                                <div class="stat-icon accurate">✓</div>
                                <span>{{ $t('pages.ohxray.validation.cfa.badge') }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="method-card-back">
                        <div class="method-icon cfa-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 12l2 2 4-4"/>
                                <circle cx="12" cy="12" r="9"/>
                                <path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
                            </svg>
                        </div>
                        <p class="method-result">CFA results: CFI <strong>0.9945</strong> Excellent, TLI <strong>0.9933</strong> Excellent</p>
                        <p class="method-result-label">RMSEA <strong>0.0575</strong> Good, SRMR <strong>0.0249</strong> Excellent</p>
                    </div>
                </div>
            </div>
        </section>


    <MainFooter/>
  </div>
</template>

<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import MainHeader from "@/components/layout/MainHeader.vue";
    import MainFooter from "@/components/layout/MainFooter.vue";
    import badge70 from "@/assets/images/badge-70.svg";
    import badge75 from "@/assets/images/badge-75.svg";
    import badge85 from "@/assets/images/badge-85.svg";
    import badge90 from "@/assets/images/badge-90.svg";
    import certificatesEn from "@/assets/images/Certificaties En.png";
    import scienceResultsEn from "@/assets/images/Science-Results-Eng.png";
    import certificatesAr from "@/assets/images/Certificates Arabic.png";
    import scienceResultsAr from "@/assets/images/Science-Results-Arabic.png";

    const { t, locale } = useI18n();

    const certificatesImage = computed(() => locale.value === 'ar' ? certificatesAr : certificatesEn);
    const scienceResultsImage = computed(() => locale.value === 'ar' ? scienceResultsAr : scienceResultsEn);
    const ohxVideo = ref<HTMLVideoElement | null>(null);

    const accreditationSteps = computed(() => [
        t('pages.ohxray.accreditation.steps.kickoff'),
        t('pages.ohxray.accreditation.steps.diagnostic'),
        t('pages.ohxray.accreditation.steps.scoring'),
        t('pages.ohxray.accreditation.steps.badge'),
        t('pages.ohxray.accreditation.steps.celebrating'),
        t('pages.ohxray.accreditation.steps.feedback')
    ]);

    const accreditationBenefits = computed(() => [
        t('pages.ohxray.accreditation.benefits.credibility'),
        t('pages.ohxray.accreditation.benefits.benchmarking'),
        t('pages.ohxray.accreditation.benefits.alignment'),
        t('pages.ohxray.accreditation.benefits.recognition'),
        t('pages.ohxray.accreditation.benefits.improvement'),
        t('pages.ohxray.accreditation.benefits.recruitment')
    ]);

    const certificateLevels = computed(() => [
        { label: t('pages.ohxray.certificates.verified'), criteria: "≥70%", image: badge70 },
        { label: t('pages.ohxray.certificates.certified'), criteria: "≥75%", image: badge75 },
        { label: t('pages.ohxray.certificates.excellence'), criteria: "≥85%", image: badge85 },
        { label: t('pages.ohxray.certificates.winner'), criteria: t('pages.ohxray.certificates.winnerCriteria'), image: badge90 }
    ]);

    // Validation section computed properties
    const validationIntroText = computed(() => {
        const intro = t('pages.ohxray.validation.intro');
        const ohxrayBrand = '<span class="brand-green">OHX-</span><span class="brand-red">RAY</span>';
        return intro.replace('{ohxray}', ohxrayBrand);
    });

    const cronbachDescription = computed(() => {
        const desc = t('pages.ohxray.validation.cronbach.description');
        const highlight = t('pages.ohxray.validation.cronbach.highlight');
        return desc.replace('{highlight}', `<strong>${highlight}</strong>`);
    });

    const cfaDescription = computed(() => {
        const desc = t('pages.ohxray.validation.cfa.description');
        const highlight = t('pages.ohxray.validation.cfa.highlight');
        return desc.replace('{highlight}', `<strong>${highlight}</strong>`);
    });

    onMounted(() => {
    if (ohxVideo.value) {
        ohxVideo.value.addEventListener('loadedmetadata', () => {
        ohxVideo.value!.currentTime = 3;
        });
    }
    });
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
    padding:32px 16px 16px;
}

.intro h2{
    font-size:32px;
    margin-bottom:8px;
    font-weight:700;
}

.intro-subtitle{
    color:#4b5563;
    font-size:18px;
    margin:0 auto;
}

.brand-green{ color:#4d8d3e; }
.brand-red{ color:#db0e15; }

.intro-actions{
    display:flex;
    gap:12px;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    margin-top:14px;
}

.primary-cta{
    display:inline-block;
    background:#4d8d3e;
    color:#fff;
    padding:12px 18px;
    border-radius:10px;
    text-decoration:none;
    font-weight:700;
    transition:background 0.2s ease, transform 0.2s ease;
}

.primary-cta:hover{
    background:#3f7433;
    transform:translateY(-1px);
}

.secondary-cta{
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

.secondary-cta:hover{
    transform:translateY(-1px);
    box-shadow:0 10px 24px rgba(0,0,0,0.06);
}

.hero-images{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:24px;
    padding:20px 16px 40px;
    max-width:1200px;
    margin:0 auto;
}

.hero-images img{
    width:calc(50% - 12px);
    max-width:550px;
    border-radius:16px;
    box-shadow:0 12px 30px rgba(0,0,0,0.06);
}

.video-wrapper{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 16px 50px;
}

.hero-video{
    width:100%;
    max-width:1000px;
    border-radius:16px;
    box-shadow:0 20px 60px rgba(0,0,0,0.08);
}

.equal-container {
    display: flex;
    gap: 20px; // optional space between boxes
    padding: 20px 16px;
    justify-content:center;
    max-width:1200px;
    margin:0 auto 40px;
    flex-wrap:wrap;
}

.equal-box {
    padding: 20px;
    border-radius: 16px;
    background:#fff;
    box-shadow:0 12px 40px rgba(0,0,0,0.05);
}

.Ohxray-Unique {
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    background:linear-gradient(135deg, #4d8d3e, #3f7433);
    width: 100%;
    max-width: 550px;
    min-height:520px;
}


h4{
    background-color: #db0e15;
    color: white;
    font-size: 30px;
    text-align: center;
    width: 400px;
    border-radius: 30px;
    padding:14px 20px;
    margin:0 auto;
}

.Ohxray-Unique p{
    margin-top:30px;
    color: white;
    text-align: center;
    width: 400px;
    font-size: 16px;
    line-height: 1.8;
}
.Ohxray-Unique ul li{
    margin-top:30px;
    color: white;
    width: 300px;
    font-size: 26px;
}

.equal-box img {
  width: 100%;
  height: auto;
  max-width: 1500px;
  border-radius:12px;
  box-shadow:0 12px 30px rgba(0,0,0,0.06);
}

.stats{
    display:flex;
    justify-content:space-between;
    width: 500px;
    margin-top:30px;
}

#first-stats , #second-stats{
    font-size:13px;
}

#first-stats{
    text-align:center;
}

#second-stats{
    text-align:center;
}

.unique-text{
    font-size:18px;
}

#org-numbers , #emp-numbers{
    color:#db0e15;
    font-size: 60px;
    font-weight:bold;
    -webkit-text-stroke: 0.4px white; /* حجم ولون الحواف */
}

#first-stats-text, #second-stats-text{
    color: white;
    font-size: 22px;
    width: 230px;
}

.mobile-img{
    display:none;
}

.second-section{
    background-color: #db0e15;
    color: white;
    font-size: 30px;
    text-align: center;
    width: 100%;
    max-width: 600px;
    border-radius: 30px;
    font-weight: bold;
}


#first-stats-text, #second-stats-text{
    font-size:16px;
}

@media screen and (max-width: 768px) {
    .hero-images{
        flex-direction:column;
        gap:16px;
        padding:16px 16px 24px;
    }

    .hero-images img{
        width:100%;
        max-width:400px;
    }

    .intro h2{
        font-size:26px;
    }

    .intro-subtitle{
        font-size:16px;
    }

    .intro-actions{
        margin-top:12px;
    }

    .hero-video{
        box-shadow:0 12px 32px rgba(0,0,0,0.06);
    }

    .equal-container{
        display: flex;
        flex-direction: column;
    }

    .first-section{
        height: 700px;
    }

    .Ohxray-Unique h4{
        font-size: 25px;
        width: 317px;
    }

    .Ohxray-Unique p{
        width: 280px;
        font-size: 18px;
    }
     .Ohxray-Unique ul li{
        width: 280px;
        font-size: 26px;
    }

    .stats{
        display: flex;
        flex-direction: column;
        align-items:center;     
    }

    #org-numbers , #emp-numbers{
        font-size: 45px;
    }

   #first-stats-text,
    #second-stats-text {
        font-size: 16px;
        width: 50%;
        margin: 0 auto; // <--- this centers the element horizontally
        text-align: center; // optional: to center the text inside
    }

    .desktop-image{
        display:none;
    }
        
    .mobile-img{
        display:block;
        width:320px;
        position:relative;
        left:50px;
    }

    .second-section{
        font-size: 22px;
        width: 320px;
    }

    .samples{
        display:none;
    }

  }

.accreditation-section,
.recognition-section{
    padding:50px 16px;
    background:#f8fafc;
    color:#1f2933;
}

.accreditation-header,
.recognition-header{
    text-align:center;
    max-width:900px;
    margin:0 auto 28px;
    
}

.eyebrow{
    text-transform:uppercase;
    letter-spacing:2px;
    font-weight:700;
    color:#4d8d3e;
    margin-bottom:8px;
}

.accreditation-header h3,
.recognition-header h3{
    font-size:32px;
    margin:0;
    font-weight:800;
    color:#4d8d3e;
}

.accreditation-header .lede,
.recognition-header .lede{
    margin-top:12px;
    font-size:18px;
    color:#4b5563;
}

.recognition-header .bold{
    font-weight:800;
    color:#1f2933;
}

.accreditation-grid{
    display:flex;
    gap:20px;
    max-width:1100px;
    margin:0 auto;
    flex-wrap:wrap;
    align-items:flex-start;
}

.journey-track{
    flex:1 1 340px;
    background:#fff;
    padding:20px;
    border-radius:16px;
    border:1px solid #e5e7eb;
    box-shadow:0 12px 30px rgba(0,0,0,0.05);
}

.journey-step{
    display:flex;
    flex-direction:column;
    align-items:stretch;
    text-align:center;
}

.journey-step__label{
    background:#f1f5f9;
    border:1px solid #e5e7eb;
    color:#1f2933;
    padding:12px 14px;
    margin-bottom:8px;
    border-radius:10px;
    font-weight:700;
}

.journey-step__arrow{
    color:#4d8d3e;
    font-size:20px;
    margin-bottom:8px;
}

.journey-benefits{
    flex:1 1 260px;
    background:#fff;
    color:#1f2933;
    padding:20px;
    border-radius:16px;
    box-shadow:0 12px 30px rgba(0,0,0,0.05);
    border:1px solid #e5e7eb;
}

.journey-benefits__title{
    margin-top:0;
    margin-bottom:12px;
    font-size:22px;
    color:#1f2933;
    background:none;
    border-radius:0;
    width:auto;
    text-align:left;
    padding:0;
}

.journey-benefits ul{
    list-style:none;
    padding:0;
    margin:0;
    display:grid;
    gap:8px;
}

.journey-benefits li{
    display:flex;
    align-items:center;
    gap:10px;
    font-weight:600;
    color:#374151;
}

.journey-benefits li::before{
    content:"•";
    color:#4d8d3e;
    font-size:16px;
}

.certificate-table{
    max-width:1150px;
    margin:0 auto;
    background:#fff;
    border-radius:16px;
    border:1px solid #e5e7eb;
    padding:20px;
    box-shadow:0 12px 30px rgba(0,0,0,0.05);
}

.certificate-label{
    background:#f1f5f9;
    color:#1f2933;
    padding:16px;
    border-radius:12px;
    font-weight:800;
    text-align:center;
    text-transform:uppercase;
    letter-spacing:1px;
    margin-bottom:14px;
}

.certificate-label.criteria{
    margin-top:14px;
}

.certificate-cards{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    gap:14px;
}

.certificate-card{
    background:#fff;
    color:#0f2735;
    border-radius:12px;
    padding:16px;
    text-align:center;
    box-shadow:0 10px 24px rgba(0,0,0,0.06);
    display:flex;
    flex-direction:column;
    gap:8px;
    height:100%;
    justify-content:space-between;
    border:1px solid #e5e7eb;
}

.certificate-card img{
    width:100%;
    max-width:180px;
    margin:0 auto;
}

.certificate-name{
    font-weight:800;
    font-size:20px;
    margin:0;
}

.certificate-criteria{
    margin:0;
    font-weight:600;
    color:#4d8d3e;
}

@media screen and (max-width: 768px){
    .accreditation-grid{
        gap:16px;
    }

    .journey-step__label{
        font-size:14px;
    }

    .recognition-header h3,
    .accreditation-header h3{
        font-size:26px;
    }

    .certificate-card img{
        max-width:150px;
    }
}

/* Scientific Validation Section */
.validation-section {
    padding: 60px 20px;
    background: linear-gradient(180deg, #f8fafc 0%, #e8f5e9 100%);
}

.validation-header {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 50px;
}

.validation-badge {
    display: inline-block;
    background: linear-gradient(135deg, #4d8d3e, #3f7433);
    color: #fff;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.validation-header h3 {
    font-size: 36px;
    font-weight: 800;
    color: #1f2933;
    margin: 0 0 20px;
}

.validation-header h3 .highlight {
    color: #4d8d3e;
}

.validation-intro {
    font-size: 18px;
    color: #4b5563;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
}

.validation-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    max-width: 1100px;
    margin: 0 auto 50px;
}

.method-card {
    position: relative;
    perspective: 1000px;
    min-height: 350px;
}

.method-card-front,
.method-card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    transition: transform 0.8s ease;
}

.method-card-front {
    background: #fff;
    transform: rotateY(0deg);
}

.method-card-back {
    background: linear-gradient(135deg, rgba(77, 141, 62, 0.92), rgba(61, 117, 50, 0.95));
    color: #fff;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.method-card:hover .method-card-front {
    transform: rotateY(-180deg);
}

.method-card:hover .method-card-back {
    transform: rotateY(0deg);
}

.method-result {
    font-size: 17px;
    line-height: 1.8;
    margin: 0 0 8px;
    color: #fff;
}

.method-result strong {
    font-size: 20px;
    color: #fff;
}

.method-result-label {
    font-size: 16px;
    line-height: 1.8;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
}

.method-result-label strong {
    color: #fff;
    font-size: 18px;
}

.method-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.alpha-icon {
    background: linear-gradient(135deg, #667eea, #764ba2);
}

.alpha-icon .greek-letter {
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    font-family: 'Times New Roman', serif;
}

.efa-icon {
    background: linear-gradient(135deg, #f093fb, #f5576c);
}

.efa-icon svg {
    width: 40px;
    height: 40px;
    color: #fff;
}

.cfa-icon {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.cfa-icon svg {
    width: 40px;
    height: 40px;
    color: #fff;
}

.method-title {
    font-size: 20px;
    font-weight: 700;
    color: #1f2933;
    margin: 0 0 12px;
    background: none;
    width: auto;
    border-radius: 0;
    padding: 0;
}

.method-desc {
    font-size: 15px;
    color: #4b5563;
    line-height: 1.7;
    margin: 0 0 20px;
}

.method-badge {
    display: inline-block;
    background: #e8f5e9;
    color: #4d8d3e;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
}

.validation-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    max-width: 1000px;
    margin: 0 auto 50px;
}

.content-card {
    display: flex;
    gap: 20px;
    background: #fff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    border: 1px solid #e5e7eb;
    align-items: flex-start;
}

.content-icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #4d8d3e, #3f7433);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-icon svg {
    width: 26px;
    height: 26px;
    color: #fff;
}

.content-text h4 {
    font-size: 18px;
    font-weight: 700;
    color: #1f2933;
    margin: 0 0 10px;
    background: none;
    width: auto;
    border-radius: 0;
    padding: 0;
    text-align: left;
}

.content-text p {
    font-size: 15px;
    color: #4b5563;
    line-height: 1.7;
    margin: 0;
}

.validation-badges {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.stat-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    padding: 16px 28px;
    border-radius: 50px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border: 2px solid #4d8d3e;
}

.stat-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #fff;
    font-size: 16px;
}

.stat-icon.reliable {
    background: linear-gradient(135deg, #667eea, #764ba2);
}

.stat-icon.sound {
    background: linear-gradient(135deg, #f093fb, #f5576c);
}

.stat-icon.accurate {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.stat-badge span {
    font-weight: 700;
    font-size: 14px;
    color: #1f2933;
    letter-spacing: 1px;
}

@media screen and (max-width: 768px) {
    .validation-header h3 {
        font-size: 26px;
    }

    .validation-intro {
        font-size: 16px;
    }

    .method-card {
        min-height: 320px;
    }

    .method-card-front,
    .method-card-back {
        padding: 24px;
    }

    .method-icon {
        width: 60px;
        height: 60px;
    }

    .alpha-icon .greek-letter {
        font-size: 32px;
    }

    .efa-icon svg,
    .cfa-icon svg {
        width: 30px;
        height: 30px;
    }

    .content-card {
        flex-direction: column;
        text-align: center;
    }

    .content-icon {
        margin: 0 auto;
    }

    .content-text h4 {
        text-align: center;
    }

    .validation-badges {
        gap: 16px;
    }

    .stat-badge {
        padding: 12px 20px;
    }

    .stat-badge span {
        font-size: 12px;
    }
}

</style>
