<template>
  <header>
    <div class="container p-3">
      <div id="logo">
        <img :src="img" alt="Netflix Logo">
      </div>
      <div id="search">
        <div class="input-group input-group-sm mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
          <button>Cerca</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
        img: "./public/img/Netflix_2015_logo.svg"
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header{
    background-color: black;
}
header > div{
    @include wp-flex;
}
#logo {
    width: 150px;
    img {
        width: 100%;
    }
}
</style>
