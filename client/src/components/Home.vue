<template>
  <div class="home">
    <h1>Welcome to the Gaming and Esports Hub</h1>
    <p>This is your one-stop destination for the latest in gaming and esports.</p>

    <div class="features">
      <div class="feature">
        <h2>Latest Game Reviews</h2>
        <p>Check out the latest reviews from popular games.</p>
        <router-link to="/reviews">Read Reviews</router-link>
      </div>

      <div class="feature">
        <h2>Esports Tournaments</h2>
        <p>Stay updated with the upcoming esports tournaments and results.</p>
        <router-link to="/tournaments">View Tournaments</router-link>
      </div>

      <!-- Additional features can be added here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  text-align: center;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.feature {
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.feature h2 {
  color: #333;
}

.feature p {
  color: #666;
}

.router-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.router-link:hover {
  background-color: #0056b3;
}
</style>
