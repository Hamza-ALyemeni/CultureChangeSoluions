<template>
  <section class="clients-section">
    <div class="container">
      <h2 class="section-title">Our Clients</h2>
      <p class="section-subtitle">Trusted by industry leaders across sectors</p>

      <div class="clients-grid">
        <div class="client-card" v-for="client in clients" :key="client.id">
          <img :src="client.logo" :alt="client.name" class="client-logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clients",
  data() {
    return {
      clients: [
        { id: 1, name: "Client A", logo: require("@/assets/images/client1.png") },
        { id: 2, name: "Client B", logo: require("@/assets/images/client2.png") },
        { id: 3, name: "Client C", logo: require("@/assets/images/client3.png") },
        { id: 4, name: "Client D", logo: require("@/assets/images/client4.png") },
        { id: 5, name: "Client E", logo: require("@/assets/images/client5.png") },
        { id: 6, name: "Client F", logo: require("@/assets/images/client6.png") },
      ],
    };
  },
};
</script>

<style scoped>
.clients-section {
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
  color: #333;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 18px;
  color: #777;
  margin-bottom: 40px;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 30px;
  align-items: center;
}

.client-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.client-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.client-logo {
  max-width: 100%;
  height: 60px;
  object-fit: contain;
}
</style>
