<template>
  <section class="success-partners-section">
    <div class="container">
      <h2 class="section-title">Success Partners</h2>
      <p class="section-subtitle">Proudly partnering with leading organizations</p>

      <div class="partners-grid">
        <div class="partner-card" v-for="partner in partners" :key="partner.id">
          <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import partner365 from '@/assets/images/365.png';
import partnerEducation from '@/assets/images/Education.png';
import partnerEHC from '@/assets/images/EHC.png';
import partnerHealth from '@/assets/images/Health.png';
import partnerMaknon from '@/assets/images/Maknon.png';
import partnerREGA from '@/assets/images/REGA.png';
import partnerDefense from '@/assets/images/Defense.png';
import partnerElectricity from '@/assets/images/Electriciy.png';

const partners = ref([
  { id: 1, name: "365", logo: partner365 },
  { id: 2, name: "Education", logo: partnerEducation },
  { id: 3, name: "EHC", logo: partnerEHC },
  { id: 4, name: "Health", logo: partnerHealth },
  { id: 5, name: "Maknon", logo: partnerMaknon },
  { id: 6, name: "REGA", logo: partnerREGA },
  { id: 7, name: "Defense", logo: partnerDefense },
  { id: 8, name: "Electriciy", logo: partnerElectricity },
]);
</script>

<style scoped>
.success-partners-section {
  padding: 60px 20px;
  background-color: #f7f9fc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #331B3B;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 18px;
  color: #777;
  margin-bottom: 40px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  align-items: center;
  justify-items: center;
}

.partner-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.partner-logo {
  max-width: 100%;
  height: auto;
  max-height: 80px;
  object-fit: contain;
}

@media screen and (max-width: 768px) {
  .success-partners-section {
    padding: 40px 15px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .partners-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
  }

  .partner-card {
    padding: 20px;
    max-width: 150px;
  }

  .partner-logo {
    max-height: 60px;
  }
}
</style>

