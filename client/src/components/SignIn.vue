<template>
  <div class="sign-in">
    <h2>Sign In</h2>
    <form @submit.prevent="signIn">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signIn() {
      // Send sign-in request to server
      this.$http.post('/api/signin', {
        email: this.email,
        password: this.password
      }).then(response => {
        // Handle response
      }, error => {
        // Handle error
      });
    }
  }
};
</script>

<style scoped>
/* ... */
</style>

methods: {
  signIn() {
    this.$http.post('/api/signin', {
      email: this.email,
      password: this.password
    }).then(response => {
      // Handle successful sign-in
      console.log('Sign in successful');
    }, error => {
      // Handle sign-in error
      console.error('Sign in failed', error);
    });
  }
}
