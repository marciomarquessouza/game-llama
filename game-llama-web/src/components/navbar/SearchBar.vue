<template>
<div>
  <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="#2c3e50"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          placeholder="Start typing to Search"
          prepend-icon="search"
        ></v-autocomplete>
</div>
</template>

<script>

export default {
  data() {
    return {
      items: [],
      isLoading: false,
      model: null,
      search: null,
    };
  },
  computed: {

  },
  watch: {

  },
};
</script>
