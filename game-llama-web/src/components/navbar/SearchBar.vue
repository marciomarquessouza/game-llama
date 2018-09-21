<template>
  <div>
    <v-layout row wrap>
      <v-flex xs10>
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
      </v-flex>
      <v-flex xs2 class="search-types">
        <v-select
          :items="categories"
          v-model="type"
          label="Type"
        ></v-select>
      </v-flex>
    </v-layout>
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
      type: null,
      types: [],
    };
  },
  methods: {
    setLoading(arg) {
      this.isLoading = arg;
    },
  },
  watch: {
    search(val) {
      if (val) {
        this.setLoading(true);
        setTimeout(() => this.setLoading(false), 3000);
      } else {
        this.setLoading(false);
      }
    },
  },
  computed: {
    categories() {
      return Object.values(this.$store.state.categories)
        .map(category => (category.name));
    },
  },
};
</script>
