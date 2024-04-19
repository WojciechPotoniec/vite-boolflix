<template>
  <div class="loadertmp">
    <div class="loader">
      <div id="logo">
        <img :src="logo.img" :alt="logo.alt" />
      </div>
      <div class="circle white"></div>
      <div class="circle red"></div>
      <div class="circle black"></div>
      <div class="circle yellow"></div>
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
.white {
  border-width: 3px 3px 0 0;
  border-color: white white transparent transparent;
  animation: 1s rotate-white linear infinite;
}
.yellow {
  border-width: 0 0 3px 3px;
  border-color: transparent transparent yellow yellow;
  animation: 1s rotate-yellow linear infinite;
}
.black {
  border-width: 0 3px 3px 0;
  border-color: transparent black black transparent;
  animation: 1s rotate-black linear infinite;
}
.red {
  border-width: 3px 0 0 3px;
  border-color: red transparent transparent red;
  animation: 1s rotate-red linear infinite;
}
@keyframes rotate-white {
  from {
    transform: rotateX(45deg) rotateY(-35deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(45deg) rotateY(-35deg) rotateZ(360deg);
  }
}
@keyframes rotate-yellow {
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
@keyframes rotate-red {
  from {
    transform: rotateY(70deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateZ(360deg);
  }
}
</style>
