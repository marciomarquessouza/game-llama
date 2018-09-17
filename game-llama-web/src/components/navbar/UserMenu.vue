<template>
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
</template>

<script>
export default {
};
</script>
