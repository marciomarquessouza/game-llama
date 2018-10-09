<template>
  <div>
    <nav-bar />
    <post-item class="llama-content" />
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
