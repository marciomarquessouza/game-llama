<template>
  <div :class="$style.initialPage">
      <img src="../../assets/llama-white.png">
      <div class="text-xs-center">
          <div class="text-xs-center">
            <router-link :to="{ name: 'Posts'}">
              <v-btn round color="indigo" dark>
                Post Example
              </v-btn>
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    teste() {
      return this.$store.state.teste;
    },
  },
};
</script>

<style module>
  .initialPage {
    background-color: #FFFFFF;
  }
</style>
