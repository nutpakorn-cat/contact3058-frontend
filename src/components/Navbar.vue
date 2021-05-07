<template>
    <div class="ui inverted menu">
      <router-link to="/" class="item"><img src="@/assets/logo.png" style="height: 30px; width: 30px;"></router-link>
      <router-link to="/contact" class="item">Contact</router-link>
      <div class="right menu">
        <a href="#" class="item" @click="logout"><i class="user icon"></i></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      localStorage.removeItem('isLogin');
      this.$router.push('/login');
    }
  }
}
</script>