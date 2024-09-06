<template>
  <div class="video-wrapper">
    <video ref="videoElement" :src="src" :poster="poster" controls></video>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Video",
  props: {
    src: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      default: "",
    },
  },
  setup() {
    const videoElement = ref(null);

    // 这里可以通过方法控制视频的播放/暂停等操作
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

    return {
      videoElement,
      play,
      pause,
    };
  },
};
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
