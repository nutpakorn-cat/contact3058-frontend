<template>
  <div></div>
</template>

<script>
export default {
  name: 'HomeScreen',
  created() {
    if (!localStorage.getItem('isLogin'))
      this.$router.push('/login');
    else
      this.$router.push('/contact');
  }
}
</script>