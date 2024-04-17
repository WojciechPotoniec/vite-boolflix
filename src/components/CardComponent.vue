<template>
  <div class="card">
    <img :src="img" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
    </div>
  </div>
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

<style lang="scss" scoped></style>
