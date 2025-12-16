<template>
  <div class="ohxray-page">
    <MainHeader/>
        <section class="intro">
          <h2> <span class="brand-green">OHX-</span><span class="brand-red">RAY</span> مقدمة تعريفية عن نظام </h2>
          <p class="intro-subtitle">نظرة شاملة توضح مؤشرات الصحة الثقافية داخل المنظمة</p>
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
                <h4 class="second-section">OHX-RAY as a Published and <br/>Approved Scientific Model</h4>
                <p>The OHX-RAY is scientifically credible as it has been published as a Proof-of-Concept from <span style="font-weight: bold;">Emerald Publishing </span>, with a research paper regarding its effectiveness in helping organizations become sustainable through its practices in the globally recognized journal, <span style="font-weight: bold;"> International Journal Of Organizational Analysis. </span></p>
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

        <section class="demo-section">
          <div class="demo-header">
            <h3>See How the OHX-RAY Survey Works</h3>
            <p>Follow the steps below, then open the live demo to experience the survey flow end-to-end.</p>
            <a class="demo-link" href="https://demo.ohxray.com" target="_blank" rel="noopener">Go to demo.ohxray.com</a>
          </div>
          <div class="demo-steps">
            <div class="demo-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h5>Register as an organization</h5>
                <p>Create an account to onboard your company into the platform.</p>
                <div class="step-image-placeholder">Step image goes here</div>
              </div>
            </div>
            <div class="demo-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h5>Log in</h5>
                <p>Sign in with your new credentials to access your dashboard.</p>
                <div class="step-image-placeholder">Step image goes here</div>
              </div>
            </div>
            <div class="demo-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h5>Go to the Organization page</h5>
                <p>Open the organization section to manage company details and data.</p>
                <div class="step-image-placeholder">Step image goes here</div>
              </div>
            </div>
            <div class="demo-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h5>Click “Add New” to add employees</h5>
                <p>Start building your employee list for the survey audience.</p>
                <div class="step-image-placeholder">Step image goes here</div>
              </div>
            </div>
            <div class="demo-step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h5>Fill employees’ data</h5>
                <p>Enter the required employee information to include them in the survey.</p>
                <div class="step-image-placeholder">Step image goes here</div>
              </div>
            </div>
            <div class="demo-step">
              <div class="step-number">6</div>
              <div class="step-content">
                <h5>Go to the Surveys tab</h5>
                <p>Access available surveys from the surveys area.</p>
                <div class="step-image-placeholder">Step image goes here</div>
              </div>
            </div>
            <div class="demo-step">
              <div class="step-number">7</div>
              <div class="step-content">
                <h5>Send the surveys</h5>
                <p>Dispatch surveys to the employees you added.</p>
                <div class="step-image-placeholder">Step image goes here</div>
              </div>
            </div>
            <div class="demo-step">
              <div class="step-number">8</div>
              <div class="step-content">
                <h5>After completion, open Survey Report</h5>
                <p>Review the survey results and insights once responses are submitted.</p>
                <div class="step-image-placeholder">Step image goes here</div>
              </div>
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

    const ohxVideo = ref<HTMLVideoElement | null>(null);

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

.demo-section{
    background:#f6f7f9;
    padding:50px 20px 70px;
    margin-top:40px;
    border-top:4px solid #4d8d3e;
}

.demo-header{
    text-align:center;
    max-width:800px;
    margin:0 auto 30px;
}

.demo-header h3{
    font-size:32px;
    color:#213547;
    margin-bottom:12px;
}

.demo-header p{
    font-size:18px;
    color:#4b5563;
    margin-bottom:16px;
}

.demo-link{
    display:inline-block;
    background:#db0e15;
    color:#fff;
    padding:12px 24px;
    border-radius:8px;
    text-decoration:none;
    font-weight:600;
    transition:background 0.2s ease, transform 0.2s ease;
}

.demo-link:hover{
    background:#b70b11;
    transform:translateY(-1px);
}

.demo-steps{
    display:grid;
    grid-template-columns:repeat(2, minmax(0, 1fr));
    gap:22px;
    max-width:960px;
    margin:0 auto;
}

.demo-step{
    background:#fff;
    border:1px solid #e5e7eb;
    border-radius:12px;
    padding:18px;
    display:flex;
    gap:12px;
    box-shadow:0 4px 12px rgba(0,0,0,0.04);
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
    font-weight:700;
    flex-shrink:0;
}

.step-content h5{
    margin:0 0 6px;
    font-size:18px;
    color:#111827;
}

.step-content p{
    margin:0 0 10px;
    color:#4b5563;
    font-size:14px;
    line-height:1.5;
}

.step-image-placeholder{
    height:140px;
    border:2px dashed #cbd5e1;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#94a3b8;
    font-size:14px;
    background:#f8fafc;
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

    .demo-section{
        padding:32px 16px 48px;
    }

    .demo-header h3{
        font-size:24px;
    }

    .demo-header p{
        font-size:16px;
    }

    .demo-steps{
        grid-template-columns:1fr;
    }

    .step-image-placeholder{
        height:120px;
    }
  }

</style>