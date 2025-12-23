<template>
  <div class="ohxray-page">
    <MainHeader/>
        <section class="intro">
          <h2> <span class="brand-green">OHX-</span><span class="brand-red">RAY</span> مقدمة تعريفية عن نظام </h2>
          <p class="intro-subtitle">نظرة شاملة توضح مؤشرات الصحة الثقافية داخل المنظمة</p>
          <div class="intro-actions">
            <RouterLink class="primary-cta" to="/ohxray-demo">Explore the Demo Steps</RouterLink>
            <a class="secondary-cta" href="https://demo.ohxray.com" target="_blank" rel="noopener">Free Live Demo</a>
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

</style>