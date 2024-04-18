<template>
  <img :src="img" class="card-img-top" :alt="title" />
</template>

<script>
export default {
  name: "CardComponent",
  props: ["img", "title", "original_title", "language", "vote"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
img {
  aspect-ratio: 2 / 3;
}
</style>
