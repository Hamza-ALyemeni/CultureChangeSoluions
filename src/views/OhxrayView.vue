<template>
  <div style="position: relative">
    <MainHeader/>
        <h2 style="display:flex; justify-content:center; margin-bottom:20px;">  <span style="color:#4d8d3e">OHX-</span><span style="color:#db0e15;">RAY</span> مقدمة تعريفية عن نظام  </h2>
        <div style="display: flex; justify-content: center; align-items: center; margin-bottom:70px;">
           <video ref="ohxVideo" style="width: 100%; max-width: 900px; height: auto;" controls>
                <source src="@/assets/OHX-RAY_VIDEO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <!-- Mobile image -->
        <img src="@/assets/images/just-dimenstions.png" alt="ohxray" class="mobile-img">
        <div class="equal-container">

            <div class="equal-box Ohxray-Unique">
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

.equal-container {
    display: flex;
    gap: 20px; // optional space between boxes
    padding: 20px;
    justify-content:center;
}

.equal-box {
    padding: 20px;
    border-radius: 8px;
}

.Ohxray-Unique {
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    background-color: #4d8d3e;
    width: 100%;
    max-width: 550px;
    height:580px;
}


h4{
    background-color: #db0e15;
    color: white;
    font-size: 30px;
    text-align: center;
    width: 400px;
    border-radius: 30px;
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
  height: 700px;
  max-width: 1500px;
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
    .equal-container{
        display: flex;
        flex-direction: column;
    }

    .Ohxray-Unique h4{
        font-size: 25px;
        width: 300px;
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