<template>
    <br>
    <div class="ui grid centered">
        <div class="four wide column">
            <form @submit.prevent="login" class="ui large form">
                <div v-if="error == true" class="ui negative message">
                    <i class="close icon" @click="() => { this.error = false; }"></i>
                    <p>
                        ไม่พบผู้ใช้งานดังกล่าวในระบบ
                    </p>
                </div>
                <div class="ui stacked segment">
                    <div class="ui segment teal">
                        <a class="ui teal ribbon label">Login</a>
                    </div>
                    <div class="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" v-model="username" required>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" v-model="password" required>
                    </div>
                    <button class="ui button">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'LoginScreen',
  data() {
      return {
          error: false,
          username: '',
          password: ''
      }
  },
  created() {
    if (localStorage.getItem('isLogin'))
        this.$router.push('/contact');
  },
  methods: {
      async login() {
          const result = await axios.post(require('../host-url') + '/login', {
              username: this.username,
              password: this.password
          });
          
          if (('success') in result.data) {
              localStorage.setItem('isLogin', true);
              this.$router.push('/contact');
          } else {
              this.error = true;
          }
      }
  }
}
</script>