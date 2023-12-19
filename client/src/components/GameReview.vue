<template>
  <div class="game-review">
    <h1>{{ title }}</h1>
    <p v-if="reviewContent">{{ reviewContent }}</p>
    <p v-else>No review content available.</p>
    <button @click="loadMore">Load More</button>
  </div>
</template>

<script>
export default {
  name: 'GameReview',
  data() {
    return {
      title: 'Game Review of the Day',
      reviewContent: 'This is an amazing game with stunning graphics and engaging gameplay!'
    };
  },
  methods: {
    loadMore() {
      // Example method to load more content
      console.log('Load more reviews...');
    }
  }
};
</script>

<style scoped>
.game-review {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.game-review h1 {
  color: #333;
  font-size: 24px;
}

.game-review p {
  color: #666;
  font-size: 16px;
}

.game-review button {
  background-color: #008f68;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.game-review button:hover {
  background-color: #007f5f;
}
</style>
