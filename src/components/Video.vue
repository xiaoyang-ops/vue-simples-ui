<template>
  <div class="video-wrapper">
    <video ref="videoElement" :src="src" :poster="poster" controls></video>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    default: "",
  },
});

const videoElement = ref(null);

const play = () => {
  if (videoElement.value) {
    videoElement.value.play();
  }
};

const pause = () => {
  if (videoElement.value) {
    videoElement.value.pause();
  }
};
onMounted(() => {});
</script>

<style>
.video-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

video {
  width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: #000;
}
</style>
