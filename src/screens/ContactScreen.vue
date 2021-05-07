<template>
    <div class="ui grid centered">
      <div class="fifteen wide column">
        <div class="ui segment">
          <div class="ui teal segment">
            <div class="ui grid">
              <div class="one wide column">
                  <a class="ui teal ribbon label" style="margin-top: 4px;">Contacts</a>
              </div>
              <div class="twelve wide column" style="padding-right: 0;">
                <form class="ui form">
                  <div class="field">
                    <input type="text" name="search" placeholder="Search..." style="
                        border-top-right-radius: 0px;
                        border-bottom-right-radius: 0px;
                    ">
                  </div>
                </form>
              </div>
              <div class="one wide column" style="padding-left: 0;">
                <button class="ui button" style="
                  border-radius: 0px;
                  height: 38px;
                ">Search</button>
              </div>
              <div class="two wide column" style="padding-left: 0;">
                <router-link to="/add-contact" class="ui orange button" style="
                  border-top-left-radius: 0px;
                  border-bottom-left-radius: 0px;
                  height: 38px;
                ">Add +</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="ui segment">
          <div class="ui grid">
            <div v-for="(contact, key) in contacts" :key="key" class="four wide column">
              <div class="ui card">
                  <div class="image">
                    <img :src="contact.imageUrl">
                  </div>
                  <div class="content" style="text-align: center;">
                    <a class="header">{{contact.firstname}} {{contact.middlename}} {{contact.lastname}}</a>
                    <div class="description">
                        Mobile: {{contact.mobile}}<br>
                        Email: {{contact.email}}<br>
                        Facebook: {{contact.facebook}}
                    </div>
                  </div>
                  <div class="extra content" style="text-align: center">
                    <router-link :to="`/update-contact/${contact._id}`" class="ui icon blue button" style="color: white;"><i class="edit icon"></i></router-link>
                    <button class="ui icon red button" style="color: white;" @click="deleteContact(contact._id, key)"><i class="delete icon"></i></button>
                  </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactScreen',
  data() {
    return {
      contacts: []
    };
  },
  created() {
    if (!localStorage.getItem('isLogin'))
      this.$router.push('/login');

    fetch(require('./../host-url') + '/contacts/getmany')
      .then(res => res.json())
      .then(output => {
        this.contacts = output;
      });
  },
  methods: {
    async deleteContact(id, key) {
      await axios.delete(require('./../host-url') + '/contact/delete', {
        data: {
          entityId: id
        }
      });
      this.contacts.splice(key, 1);
    }
  }
}
</script>