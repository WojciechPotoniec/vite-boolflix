<template>
  <div class="loadertmp">
    <div class="loader">
      <div id="logo">
        <img :src="logo.img" :alt="logo.alt" />
      </div>
      <div class="circle red"></div>
      <div class="circle black-1"></div>
      <div class="circle black"></div>
      <div class="circle red-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
        logo: {
            img: "/img/Netflix_Symbol.png",
            alt: "Netflix Symbol"
        }
    };
  },
};
</script>

<style lang="scss" scoped>
#logo {
  width: 85px;
  img {
    width: 100%;
  }
}
.loadertmp {
  height: calc(100vh - 79px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #434343;
}
.loader {
  height: 20em;
  width: 20em;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle {
  position: absolute;
  height: 80%;
  width: 80%;
  border-radius: 50%;
  border-style: solid;
}
.red {
  border-width: 3px 3px 0 0;
  border-color: red red transparent transparent;
  animation: 1s rotate-red linear infinite;
}
.red-1 {
  border-width: 0 0 3px 3px;
  border-color: transparent transparent red red;
  animation: 1s rotate-red-1 linear infinite;
}
.black {
  border-width: 0 4px 4px 0;
  border-color: transparent black black transparent;
  animation: 1s rotate-black linear infinite;
}
.black-1 {
  border-width: 4px 0 0 4px;
  border-color: black transparent transparent black;
  animation: 1s rotate-black-1 linear infinite;
}
@keyframes rotate-red {
  from {
    transform: rotateX(45deg) rotateY(-35deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(45deg) rotateY(-35deg) rotateZ(360deg);
  }
}
@keyframes rotate-red-1 {
  from {
    transform: rotateX(45deg) rotateY(35deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(45deg) rotateY(35deg) rotateZ(360deg);
  }
}
@keyframes rotate-black {
  from {
    transform: rotateX(70deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(70deg) rotateZ(360deg);
  }
}
@keyframes rotate-black-1 {
  from {
    transform: rotateY(70deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateZ(360deg);
  }
}
</style>
