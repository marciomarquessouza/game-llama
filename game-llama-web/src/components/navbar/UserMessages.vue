<template>
  <v-menu :close-on-content-click="false" :nudge-width="350" bottom offset-y>
    <v-btn  flat icon
            color="#263959"
            slot="activator"
            :class="{ llama_badge: getHasMessage }"
            :data-badge="messagesCount"
            @click="removeMessageBadge">
      <v-icon large>notification_important</v-icon>
    </v-btn>
    <v-card>
      <v-list two-line>
        <div v-for="userMessage in userMessages" :key="userMessage['.key']">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="indigo">{{ userMessage.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ userMessage.subject }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ userMessage.from }}</v-list-tile-sub-title>
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
  mounted() {
    this.$store.dispatch('checkNewMessages');
  },
  methods: {
    removeMessageBadge() {
      this.$store.dispatch('setHasMessages', false);
    },
  },
  computed: {
    ...mapGetters({
      getAuthUser: 'authUser',
      getUserMessages: 'userMessages',
      getMessages: 'messages',
      getHasMessage: 'hasMessage',
    }),
    messagesCount() {
      return Object.values(this.userMessages).length;
    },
    userMessages() {
      return Object.values(this.getMessages)
        .filter(message => this.getAuthUser['.key'] === message.userId);
    },
  },
};
</script>
