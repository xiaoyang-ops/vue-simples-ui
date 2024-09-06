<script setup>
import { Button } from "./components";
import { Video } from "./components";
</script>

<template>
  <div>
    <Button>普通按钮</Button>
    <Button type="primary">Primary按钮</Button>
    <Button type="secondary">Secondary按钮</Button>
    <Video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://www.w3schools.com/html/pic_trulli.jpg"
    />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
