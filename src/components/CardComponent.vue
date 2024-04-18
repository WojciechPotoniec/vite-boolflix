<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="img" class="card-img-top" :alt="original_title" />
      </div>
      <div class="flip-card-back">
        <h6 class="card-title">{{ title }}</h6>
        <small class="card-text">{{ original_title }}</small>
        <div class="flag">
          <img :src="imgFlag" :alt="language" />
        </div>
        <div class="stars">
          <i
            :class="{ 'fa-solid': n <= vote, 'fa-regular': n > vote }"
            class="fa-star"
            v-for="n in 5"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["img", "title", "original_title", "language", "vote"],
  data() {
    return {
      flags: ["en", "es", "fr", "it", "de"],
    };
  },
  computed: {
    imgFlag() {
      if (this.flags.includes(this.language)) {
        return `/img/${this.language}.svg.png`;
      } else {
        return `/img/placeholder.png`;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.flag {
  height: 25px;
  width: 35px;
  img {
    height: 100%;
    width: 100%;
  }
}
.flip-card {
  aspect-ratio: 1 / 1.5;
  background-color: transparent;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  img {
    aspect-ratio: 1 / 1.5;
  }
}

.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
.stars {
  color: gold;
}
</style>
