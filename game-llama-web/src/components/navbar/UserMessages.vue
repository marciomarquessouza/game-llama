<template>
  <v-menu :close-on-content-click="false" :nudge-width="250" bottom offset-y>
    <v-btn  flat icon
            color="#263959"
            slot="activator"
            :class="{ llama_badge: hasMessage }"
            :data-badge="messagesCount">
      <v-icon large>notification_important</v-icon>
    </v-btn>
    <v-card>
      <v-list two-line>
        <div v-for="message in messages" :key="message['.key']">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="indigo">{{ message.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ message.subject }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ message.from }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        </div>
      </v-list>
      <v-divider></v-divider>
    </v-card>
  </v-menu>
</template>

<script>

import { mapGetters } from 'vuex';


export default {
  data() {
    return {
      hasMessage: true,
      items: [],
    };
  },
  computed: {
    ...mapGetters({
      user: 'authUser',
      userMessages: 'userMessages',
      messages: 'messages',
    }),
    messagesCount() {
      return Object.values(this.userMessages).length;
    },
  },
};
</script>
