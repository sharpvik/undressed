<script>
import { addStory } from "../fire/story";
import router from "../router";

export default {
  name: "Speak",

  data() {
    return {
      story: "",
    };
  },

  methods: {
    publish(e) {
      e.preventDefault();
      addStory(this.story, new Date()).then((story) =>
        router.push({ name: "posted", params: { id: story.id } })
      );
    },
  },
};
</script>

<template>
  <div class="container">
    <header><h1 class="accent">Speak</h1></header>
    <form @submit="publish">
      <textarea
        v-model="story"
        placeholder="I always wanted to fuck my physics professor but ..."
        rows="8"
      ></textarea>
      <button>Send</button>
    </form>
  </div>
</template>

<style scoped>
header {
  padding: 16px 0;
}
header > h1 {
  font-size: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

textarea {
  display: block;
  width: calc(100% - 16px);
  margin: auto;
  resize: vertical;
  background-color: var(--vt-c-black-mut);
  border: solid 1px var(--vt-c-white-mute);
  color: var(--color-heading);
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding: 8px;
  font-size: 15px;
}

button {
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
