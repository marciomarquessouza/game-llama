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
                <v-icon large>notification_important</v-icon>
              </v-btn>
            </v-badge>
            <v-menu
              :close-on-content-click="false"
              :nudge-width="300"
              bottom
              offset-y>
              <v-btn dark icon color="#263959" slot="activator">
                <v-icon large>account_circle</v-icon>
              </v-btn>
              <v-card>
                <v-list>
                  <v-list-tile avatar>
                    <v-list-tile-avatar>
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Marcio Souza</v-list-tile-title>
                      <v-list-tile-sub-title>Black Llama</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn flat color="primary">logout</v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-title>
                      <v-icon small>invert_colors</v-icon>
                      My last spits
                    </v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title>
                      <v-icon small>exit_to_app</v-icon>
                      Following Llamas
                    </v-list-tile-title>
                  </v-list-tile>
                </v-list>
                <v-divider></v-divider>
              </v-card>
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
    };
  },
};
</script>
