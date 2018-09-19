<template>
  <div>
    <nav-bar></nav-bar>
    <post-item></post-item>
  </div>
</template>

<script>

import PostItem from '@/components/posts/PostItem';
import TheNavBar from '@/components/navbar/TheNavBar';

export default {
  components: {
    'post-item': PostItem,
    'nav-bar': TheNavBar,
  },
};
</script>

<style lang="css">

</style>
