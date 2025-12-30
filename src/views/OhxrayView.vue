<template>
  <div class="ohxray-page">
    <MainHeader/>
        <section class="intro">
          <h2> <span class="brand-green">OHX-</span><span class="brand-red">RAY</span> مقدمة تعريفية عن نظام </h2>
          <p class="intro-subtitle">نظرة شاملة توضح مؤشرات الصحة الثقافية داخل المنظمة</p>
          <div class="intro-actions">
            <RouterLink class="primary-cta" to="/ohxray-demo">Free Live Demo</RouterLink>
          </div>
        </section>
        <div class="video-wrapper">
           <video ref="ohxVideo" class="hero-video" controls>
                <source src="@/assets/OHX-RAY_VIDEO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <!-- Mobile image -->
        <img src="@/assets/images/just-dimenstions.png" alt="ohxray" class="mobile-img">
        <div class="equal-container">

            <div class="equal-box Ohxray-Unique first-section">
                <h4>What Makes OHX-RAY <br/> Unique?</h4>
                <p>The <span style="color: #db0e15; font-weight: bold;">OHX-RAY</span> has a total of <span style="font-weight: bold;"> 34 indicators </span> to measure organizational culture health allowing for great value benchmarking across <span style="font-weight: bold;">FOUR</span> different demographics (Gender, Age, Level and Nationality).</p>
                <div class="stats">
                    <div id="first-stats">
                        <div id="org-numbers">+25</div>
                        <div id="first-stats-text">organizations in different industries (Private, Public & Non-Profit)</div>
                    </div>
                    <div id="second-stats">
                        <div id="emp-numbers">+26K</div>
                        <div  id="second-stats-text">employee feedback ensuring significant value for benchmarking.</div>
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
                <h4 class="second-section">OHX-RAY a Quantitative Product of Vast Practical Experience</h4>
                <p>The <span style="font-weight:bold" > OHX-RAY </span> is a product of 25 years of continuous research, studies and deep understanding of global models, CCS designed its health check model framework introducing multiple benefits to organization management.</p>
            </div>
        </div>
         <div class="equal-container samples">
            <div class="equal-box Ohxray-Unique">
                <h4>OHX-RAY Sample <br/> Reports on Culture</h4>
                <ul>
                    <li>Holistic Image</li>
                    <li>Benchmark report</li>
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
                <h3>Recognizing Organizations</h3>
                <p class="lede">
                    Not just an evaluation... but a <span class="bold">SEAL OF TRUST</span> that signals a healthy, reliable workplace culture and strengthens your organization's reputation and brand internally and externally.
                </p>
            </div>
            <div class="certificate-table">
                <div class="certificate-label">
                    <span>Certificate Level</span>
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
                <h3 >Healthy Organizational Accreditation Journey</h3>
                <p class="lede">Achieving organizations will earn a certificate for a healthy culture.</p>
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
                    <h4 class="journey-benefits__title">Benefits and Added Value from Accreditation</h4>
                    <ul>
                        <li v-for="benefit in accreditationBenefits" :key="benefit">{{ benefit }}</li>
                    </ul>
                </div>
            </div>
        </section>

        
    <MainFooter/>
  </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import MainHeader from "@/components/layout/MainHeader.vue";
    import MainFooter from "@/components/layout/MainFooter.vue";
    import badge70 from "@/assets/images/badge-70.svg";
    import badge75 from "@/assets/images/badge-75.svg";
    import badge85 from "@/assets/images/badge-85.svg";
    import badge90 from "@/assets/images/badge-90.svg";

    const ohxVideo = ref<HTMLVideoElement | null>(null);

    const accreditationSteps = [
        "Kick-off OHX-RAY",
        "Diagnostic Results & Reporting",
        "Scoring Verification & CCS Board Review",
        "Badge Award",
        "Celebrating the Accreditation",
        "Feedback Report and WHAT NEXT"
    ];

    const accreditationBenefits = [
        "Credibility.",
        "Benchmarking.",
        "Internal alignment.",
        "Public recognition.",
        "Continuous improvement.",
        "Recruitment & retention appeal."
    ];

    const certificateLevels = [
        { label: "Verified", criteria: "≥70%", image: badge70 },
        { label: "Certified", criteria: "≥75%", image: badge75 },
        { label: "Excellence", criteria: "≥85%", image: badge85 },
        { label: "Winner", criteria: "≥90% and within the 10% top-quartile organization", image: badge90 }
    ];

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
        width: 372px;
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

</style>
