<template>
  <header class="header">
    <v-container fluid grid-list-md class="header-container">
      <v-layout row wrap>
        <v-flex xs3>
          <router-link :to="{name:'Home'}" class="logo">
            <img src="../../assets/logo_header.png">
          </router-link>
        </v-flex>
        <v-flex xs6>

        </v-flex>
        <v-flex xs3>

        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
export default {
};
</script>
