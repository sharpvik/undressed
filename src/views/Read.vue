<script>
import { RouterLink } from "vue-router";

import { getStory } from "../fire/story";

export default {
  name: "Read",

  created() {
    getStory(this.$route.params.id).then(
      (story) => (this.story = story.data())
    );
  },

  data() {
    return {
      story: {
        ts: "4:20PM",
        text: "Loading...",
      },
    };
  },
};
</script>

<template>
  <div class="container">
    <header><h1 class="accent">Read</h1></header>
    <main>
      <div>{{ story.ts.toDate().toLocaleString() }}</div>
      <div>{{ story.text }}</div>
    </main>
    <RouterLink class="button" to="/">Back to Feed</RouterLink>
  </div>
</template>

<style scoped>
header {
  padding: 16px 0;
}
header > h1 {
  font-size: 20px;
}

.button {
  display: inline-block;
  background-color: var(--accent);
  text-decoration: none;
  color: var(--color-background);
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0;
  border-radius: 8px;
  border: none;
}
</style>
