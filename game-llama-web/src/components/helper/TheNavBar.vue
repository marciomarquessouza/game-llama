<template>
  <header>
    <v-toolbar>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-layout row wrap>
        <v-flex xs4>
          <router-link :to="{name:'Home'}" class="logo">
            <img src="../../assets/logo_header.png">
          </router-link>
        </v-flex>
        <v-flex xs4>
          <v-text-field
              label="Search in Game Llama"
              prepend-inner-icon="search"
              class="search"
              clearable>
          </v-text-field>
        </v-flex>
        <v-flex xs4>
          <div class="right-icons">
            <v-btn flat icon color="#263959">
              <v-icon large>edit</v-icon>
            </v-btn>
            <v-badge  color="red" overlap>
              <span   v-if="messageCounter" slot="badge">0</span>
              <v-btn flat icon color="#263959">
                <v-icon large>email</v-icon>
              </v-btn>
            </v-badge>
            <v-menu bottom left>
              <v-btn dark icon color="#263959" slot="activator">
                <v-icon large>account_circle</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile v-for="item in items" :key="item.key">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </v-flex>
      </v-layout>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      messageCounter: false,
      profileCounter: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
};
</script>
