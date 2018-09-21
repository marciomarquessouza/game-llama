<template>
  <header>
    <v-toolbar>
      <v-layout row wrap>
        <v-flex xs3>
          <router-link :to="{name:'Home'}" class="logo">
            <img src="../../assets/logo_header.png">
          </router-link>
        </v-flex>
        <v-flex xs6>
          <search-bar class="search"></search-bar>
        </v-flex>
        <v-flex xs3>
          <div class="right-icons">
            <v-btn flat icon color="#263959">
              <v-icon large>add_circle</v-icon>
            </v-btn>
            <v-badge  color="red" overlap>
              <span   v-if="messageCounter" slot="badge">0</span>
              <v-btn flat icon color="#263959">
                <v-icon large>notification_important</v-icon>
              </v-btn>
            </v-badge>
            <user-menu></user-menu>
          </div>
        </v-flex>
      </v-layout>
    </v-toolbar>
  </header>
</template>

<script>

import UserMenu from '@/components/navbar/UserMenu';
import SearchBar from '@/components/navbar/SearchBar';

export default {
  components: {
    'user-menu': UserMenu,
    'search-bar': SearchBar,
  },
  data() {
    return {
      messageCounter: false,
      profileCounter: false,
    };
  },
};
</script>
