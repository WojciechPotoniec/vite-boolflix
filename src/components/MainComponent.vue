<template>
  <main>
    <CardList />
  </main>
</template>

<script>
import CardList from "./CardList.vue";
export default {
  name: "MainComponent",
  components: {
    CardList,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
main {
  height: calc(100vh - 79px);
  overflow-y: auto;
  background-color: #434343;
}
</style>
