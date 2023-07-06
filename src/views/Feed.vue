<script>
import { RouterLink } from "vue-router";

import { getFeed } from "../fire/story";

export default {
  name: "Feed",

  created() {
    getFeed().then((feed) => (this.stories = feed));
  },

  data() {
    return {
      stories: [],
    };
  },
};
</script>

<template>
  <div class="container">
    <header><h1 class="accent">Take a Bite</h1></header>
    <main>
      <div class="story" v-for="story in stories" :key="story.id">
        <div class="ts">{{ story.ts.toDate().toLocaleString() }}</div>
        <div>{{ story.text }}</div>
      </div>
    </main>
    <footer></footer>
    <RouterLink class="button" to="/speak">Speak Your Truth</RouterLink>
  </div>
</template>

<style scoped>
header {
  padding: 16px 0;
}
header > h1 {
  font-size: 20px;
}

.story {
  background-color: var(--vt-c-black-mute);
  border: solid 1px var(--vt-c-white-mute);
  color: var(--color-heading);
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
}
.story > .ts {
  font-size: 12px;
  color: var(--color-text);
}

.button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: inline-block;
  background-color: var(--accent);
  text-decoration: none;
  color: var(--color-background);
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
}

footer {
  height: 80px;
}
</style>
