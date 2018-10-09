<template>
<div>
  <v-layout row wrap>
    <v-flex xs10>
      <v-autocomplete
          v-model="searchItems"
          :disabled="isUpdating"
          :items="search"
          color="indigo"
          label="Search in Game-Llama"
          item-text="name"
          item-value="name"
          clearable>
        <template slot="selection" slot-scope="data">
          {{ data.item.name }}
        </template>
        <template slot="item" slot-scope="data">
          <template v-if="typeof data.item !== 'object'">
            <v-list-tile-content v-text="data.item">
            </v-list-tile-content>
          </template>
          <template v-else>
          <v-list-tile-avatar>
            <img :src="data.item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="data.item.name">
            </v-list-tile-title>
            <v-list-tile-sub-title v-html="data.item.group">
            </v-list-tile-sub-title>
          </v-list-tile-content>
          </template>
        </template>
      </v-autocomplete>
    </v-flex>
    <v-flex xs2 class="search-types">
      <v-select
        :items="categories"
        v-model="type"
        color="indigo"
        label="Type"
        clearable>
      </v-select>
    </v-flex>
  </v-layout>
</div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      type: null,
      searchItems: [],
      isUpdating: false,
    };
  },
  methods: {
    remove(item) {
      const index = this.searchItems.indexOf(item.name);
      if (index >= 0) this.searchItems.splice(index, 1);
    },
    setUpdating(arg) {
      this.isUpdating = arg;
    },
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => this.setUpdating(false), 3000);
      }
    },
  },
  computed: {
    ...mapGetters({
      getUsers: 'users',
      getCategories: 'categories',
      getPosts: 'posts',
    }),
    categories() {
      return Object.values(this.getCategories)
        .map(category => (category.name));
    },
    search() {
      let posts = [];
      let items = [];
      const categories = ['Posts', 'Users'];
      categories.forEach((categoryHeader) => {
        posts.push({ divider: true });
        posts.push({ header: categoryHeader });
        if (categoryHeader === 'Posts') {
          items = Object.values(this.getPosts)
            .map(post =>
              ({
                name: post.title,
                group: categoryHeader,
                avatar: post.postImage,
              }),
            );
        } else {
          items = Object.values(this.getUsers)
            .map(user =>
              ({
                name: user.name,
                group: categoryHeader,
                avatar: user.avatar,
              }),
            );
        }
        posts = posts.concat(items);
      });
      return posts;
    },
  },
};
</script>
