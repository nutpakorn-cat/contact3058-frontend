<template>
    <br>
    <div class="ui grid centered">
      <div class="fifteen wide column">
        <div class="ui segment">
          <form @submit.prevent="addContact" class="ui form">
            <h1 class="ui dividing header">Contact<a class="ui orange tag label" style="margin-left: 30px;">Update</a></h1>
            <div class="field">
              <label>Contact ID</label>
              <input type="text" placeholder="Contact ID" v-model="contactId" required>
            </div>
            <div class="field">
              <label>Firstname</label>
              <input type="text" placeholder="Firstname" v-model="firstname" required>
            </div>
            <div class="field">
              <label>Lastname</label>
              <input type="text" placeholder="Lastname" v-model="lastname" required>
            </div>
            <div class="field">
              <label>Mobile NO.</label>
              <input type="text" placeholder="Mobile NO." v-model="mobile" required>
            </div>
            <div class="field">
              <label>Email</label>
              <input type="text" placeholder="Email" v-model="email" required>
            </div>
            <div class="field">
              <label>Facebook</label>
              <input type="text" placeholder="Facebook" v-model="facebook" required>
            </div>
            <div class="field">
              <label>Image URL</label>
              <input type="text" placeholder="Image URL" v-model="imageUrl" required>
            </div>
            <div class="ui grid centered" style="margin-top: 20px; margin-bottom: 8px;">
              <button class="ui primary basic button" @click="updateContact"><i class="save icon"></i> Save</button>
              <router-link to="/" class="ui negative basic button"><i class="close icon"></i> Close</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UpdateContactScreen',
  data() {
    return {
      contactId: '',
      firstname: '',
      lastname: '',
      mobile: '',
      email: '',
      facebook: '',
      imageUrl: ''
    };
  },
  async created() {
    if (!localStorage.getItem('isLogin'))
      this.$router.push('/login');

    const id = this.$route.params.id;
    let data = await axios.get(require('../host-url') + '/contact/get/' + id);

    data = data.data;

    if (data == {})
      this.$router.push('/');

    this.contactId = data.contactId;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.mobile = data.mobile;
    this.email = data.email;
    this.facebook = data.facebook;
    this.imageUrl = data.imageUrl;

  },
  methods: {
    async updateContact() {
      await axios.put(require('../host-url') + '/contact/update', {
        entityId: this.$route.params.id,
        contactId: this.contactId,
        firstname: this.firstname,
        lastname: this.lastname,
        mobile: this.mobile,
        email: this.email,
        facebook: this.facebook,
        imageUrl: this.imageUrl
      });
      this.$router.push('/');
    }
  }
}
</script>